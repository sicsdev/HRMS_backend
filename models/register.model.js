import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true },
    phonenumber:{type: String, required: true },
    dob: {type: String, required: true },
    reporting_manager:{type: String, default: '' },
    designation:{type: String , default: '' },
    leave_quota:{type: String , default: '' },
    image: {type: String, get: (image) => {
        return `${APP_URL}/${image}`;
     }},
}, { timestamps:true, toJSON: { getters: true } } );

export default mongoose.model('Register', registerSchema, 'userdata')