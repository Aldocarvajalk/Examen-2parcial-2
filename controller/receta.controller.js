import mongoose from "mongoose";
import receta from "../model/recetas.model.js";

export const getAllRecetas = async(req, res) => {
    console.log('obtiene todas las Recetas')
    try {
        const recetas = await receta.find({}, { __v: 0 })
        if (recetas.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron recetas'
            });
        }
        return res.status(200).json({
            recetas
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener las recetas'
        });
    }
}

export const getIDRecetas = async(req, res) => {
    console.log('Traer recetas por id');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const recetas = await receta.findById(id);
        if (!recetas) {
            return res.status(404).json({
                msg: 'Receta no encontrado'
            });
        }
        return res.status(200).json({
            ejemplo
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener la receta'
        });
    }
}

export const postRecetas = async(req, res) => {
    console.log('Subiendo recetas');
    const body = req.body;
    const recetas = new receta(body);
    try {
        const validationError = recetas.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await recetas.save();
        return res.status(201).json({
            recetas
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar la receta'
        });
    }
}

export const putRecetas = async(req, res) => {
    console.log('Editar recetas')
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const recetas = await receta.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!recetas) {
            return res.status(404).json({
                msg: 'Ejemplo no encontrado'
            });
        }

        return res.status(200).json({
            recetas
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar la receta'
        });
    }
}

export const deleteRecetas = async(req, res) => {
    console.log('Eliminar receta por id');
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no valido'
            });
        }
        const recetas = await receta.findByIdAndDelete(id);
        if(!recetas){
            return res.status(404).json({
                msg: 'receta no encontrado'
            });
        }
        return res.status(200).json({
            msgg: 'Receta eliminada',
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar al receta'
        });
    }
}

