import express from 'express';
import getAllCourse,{createCourse,getCoursesByType} from '../controllers/CoursesControleer.js';
const courseRouter = new express.Router();

courseRouter.post("/addcourse", createCourse);
// Getting all courses
courseRouter.get("/allcourses", getAllCourse)
// get course using type
courseRouter.get("/courses/:type",getCoursesByType);


export default courseRouter;