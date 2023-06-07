import mongoose from 'mongoose'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    cpass: {
        type: String,
        required: true,
    },
    tokens : [
        {
            token:{
                type : String,
                require : true
            }
        }
    ]
})

userSchema.methods.generateToken = async function(){
    try {
        let mytoken = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: mytoken})
         await this.save();
         return mytoken;
    } catch (error) {
        console.log(error);
    }
}


const users = new mongoose.model("user", userSchema);
export default users;