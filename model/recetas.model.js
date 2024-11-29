import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: true 
    },
    ingredientes: { 
        type: [String], 
        required: true 
    },
    pasos: { 
        type: [String], 
        required: true 
    }, 
    categoria: { 
        type: String, 
        required: true 
    },
    tiempoPreparacion: { 
        type: Number, 
        required: true 
    }, 
    autor: { 
        type: String, 
        required: true 
    }
});

const receta = mongoose.model('receta', recetaSchema)

export default receta