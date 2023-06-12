import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import createConnection from "./Db/Connection.js";
import instructRoutes from "./routes/InstuctRoutes.js";
import userRouter from "./routes/userRouter.js";
import courseRouter from "./routes/CourseRouter.js";
import favRoutes from "./routes/FavRoutes.js";
const app = express();
dotenv.config();
app.use(express.json())
app.use(cors())
app.use(instructRoutes);
app.use(userRouter);
app.use(courseRouter);
app.use(favRoutes);
const port = process.env.PORT

app.listen(port, () => {
    console.log(`app is running at port ${port}`)
})