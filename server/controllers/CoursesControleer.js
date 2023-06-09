
import courses from "../model/CourseSchema.js";




const createCourse = async (req, res) => {
    const { title, price, type, author, description, img } = req.body

    if (!title || !price || !type || !author || !description || !img) {
        return res.status(501).json({ err: "Fields can not be empty" })
    }
    console.log(author);

    try {
        const newData = new courses({ ...req.body })
        const existData = await courses.findOne({ title } || { author });
        if (existData) {
            return res.status(501).json({ err: "Course is already Uploaded" })
        } else {
            await newData.save();
            res.status(201).json({ msg: "Data inserted" })
        }
    } catch (error) {
        res.status(401).json({ err: error })
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

const getCoursesByType = async (req, res) => {
    const {type} = req.body;
    try {
        const allData = await courses.find({ type })
        if(allData.length){
            return res.status(201).json({ success: allData })
        }else{
            res.status(401).json({ err: "Data not Found" });
        }
        
    } catch (error) {
        console.log(error);
    }
}

// * find course by name ---->

const getCourseByName = async (req,res)=>{
    const {title} = req.body;
    if(!title){
        return res.status(501).json({err : "Search Data can not be empty"})
    }
    try {
        const allData = await courses.find({ title: { $regex: '\\b' + title + '\\b', $options: 'i' } })
        if(allData.length){
            return res.status(201).json({ success: allData })
        }else{
            res.status(501).json({ err: "Data not Found" });
        }
    } catch (error) {
        console.error(error);
    }
}

// * find courses by id

const getById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const data = await instructor.findOne({ _id: id })
        res.status(201).json({ "success": data })
    } catch (error) {
        res.json({ err: "Data not found" })
    }
}

export default getAllCourse;
export { createCourse, getCoursesByType, getById,getCourseByName }