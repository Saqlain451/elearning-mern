import express from 'express';
import getAllCourse, { createCourse, getCoursesByType, getById, getCourseByName } from '../controllers/CoursesControleer.js';
const courseRouter = new express.Router();

courseRouter.post("/addcourse", createCourse);
//* Getting all courses
courseRouter.get("/allcourses", getAllCourse)

// * get courses by using type
courseRouter.post("/courses/type", getCoursesByType);

// * get course by using title
courseRouter.post("/courses/title",getCourseByName);

// * get courses by id
courseRouter.get("/courses/:id", getById);

export default courseRouter;