import { Router } from "express";
import { getAllRecetas, getIDRecetas, putRecetas, postRecetas, deleteRecetas } from "../controller/receta.controller.js";

const receta = Router()

receta.get('/', getAllRecetas)
receta.get('/:id', getIDRecetas)
receta.post('/', postRecetas)
receta.put('/:id', putRecetas)
receta.delete('/:id', deleteRecetas)

export default receta