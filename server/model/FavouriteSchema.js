import mongoose from 'mongoose';

const favSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

const favourite = new mongoose.model("favourite",favSchema);
export default favourite;
