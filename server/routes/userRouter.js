import express from 'express';
import { createUser,checkUser } from '../controllers/userController.js';
const userRouter = new express.Router();


userRouter.post("/register",createUser);
userRouter.post("/login", checkUser)
export default userRouter;