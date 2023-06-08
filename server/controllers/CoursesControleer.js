
import courses from "../model/CourseSchema.js";


const createCourse = async (req, res) => {
    const { title, price, type, author, description,img } = req.body
    
    if (!title || !price || !type || !author || !description|| !img) {
        return res.status(501).json({err: "Fields can not be empty"})
    }
    console.log(author);
     
    try {
        const newData = new courses ({...req.body}) 
        const existData = await courses.findOne({title}||{author});
        if(existData){
          return  res.status(501).json({err : "Course is already Uploaded"})
        }else {
            await newData.save();
            res.status(201).json({ msg: "Data inserted" })
        }
    } catch (error) {
        res.status(401).json({err : error})
        console.log(error)
    }
}

//* find all courses

const getAllCourse = async (req, res) => {
    try {
        const allData = await courses.find({});
        res.status(201).json({ success: allData })
    } catch (error) {
        res.status(401).json(error)
    }
}
// * finding courses using type

const getCoursesByType = async(req, res)=>{
    try {
        const allData = await courses.find({type : req.params.type})
        res.status(201).json({success : allData})
    } catch (error) {
        res.status(401).json({err : "Data not Found"});
    }
}

export default getAllCourse;
export {createCourse,getCoursesByType}