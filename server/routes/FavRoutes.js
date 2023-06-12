import express from 'express'
import { addFav,getAllFav } from "../controllers/FavControllers.js";
const favRoutes = new express.Router();

favRoutes.post("/addFav",addFav)

favRoutes.get("/allFav/:mail", getAllFav)

export default favRoutes;