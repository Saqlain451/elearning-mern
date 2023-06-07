import express from 'express'
import { addInstrucotr,allInstructors,individualInstructor } from '../controllers/InstructorController.js';
const instructRoutes = express.Router();
// * Adding new instrunctor ----->
instructRoutes.post("/addInstrucotr",addInstrucotr);
// * Getting all instrusctor data ----->
instructRoutes.get("/allInstructor",allInstructors)

// * Getting individual data of instructor ----->
instructRoutes.get("/allInstructor/:id",individualInstructor)


export default instructRoutes;
