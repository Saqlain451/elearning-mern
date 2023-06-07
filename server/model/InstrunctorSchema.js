
import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        require: true,
    },
    social: {
        fb: { type: String },
        link: { type: String },
        insta: { type: String }
    },
    about: {
        type: String,
        default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto doloribus sapiente velit odit ratione, totam corrupti fugit veniam eos molestias numquam sit dolorem aperiam? Vel harum ipsum ipsa quas."
    },

})

const instructor = new mongoose.model("instructor", instructorSchema);
export default instructor;