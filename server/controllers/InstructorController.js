import instructor from '../model/InstrunctorSchema.js'

// create 
const addInstrucotr = async (req, res) => {
    const { fname, lname, img, role } = req.body;
    if (!fname || !lname || !img || !role) {
        return res.json({ err: "Can not send epty data" })
    }

    try {
        const newData = new instructor({ ...req.body })
        const existData = await instructor.findOne({ img })
        if (existData) {
            res.status(501).json({ err: "You are already registered" })
        } else {
            await newData.save();
            res.status(201).json({ msg: "Data inserted" })
        }
    } catch (error) {
        res.status(401).json({
            err: "Data is not inserted"
        })
    }
}

// Getall instructor datas

const allInstructors = async (req, res) => {
    try {
        const allData = await instructor.find({});
        res.status(201).json({ "success": allData })
    } catch (error) {
        res.json("Data not found")
    }
}

//  Get individual instructor data ----->
const individualInstructor = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const data = await instructor.findOne({ _id: id })
        res.status(201).json({ "success": data })
    } catch (error) {
        res.json({ err: "Data not found" })
    }
}

export { addInstrucotr, allInstructors,individualInstructor }