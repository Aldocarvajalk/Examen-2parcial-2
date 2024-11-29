import ejemplo from "./ejemplo.routes.js";
import { Router } from "express";
import receta from "./receta.routes.js";

const indexRouter = Router();

indexRouter.use('/ejemplos', ejemplo)
indexRouter.use('/receta', receta)

export default indexRouter