import express from 'express'
import { addFav } from "../controllers/FavControllers.js";
const favRoutes = new express.Router();

favRoutes.post("/addFav",addFav)

export default favRoutes;