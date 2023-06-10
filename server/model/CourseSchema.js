import mongoose from 'mongoose';
const courseSchema = new mongoose.Schema({
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
    },
    description: {
        type: String,
        require: true
    },
    language: {
        type: String,
        default: "Hindi"
    },
    intro: {
        type: String,
        required: true,
    },
    videos: [{
        title: {
            type: String,
            required: true
        }, 
        url: {
            type: String,
            required: true
        }
    }]
})


const courses = new mongoose.model("course", courseSchema);
export default courses;