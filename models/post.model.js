import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, default: ''},
    description: { type: String, default: '' }, 
    post_date : {type: Date} ,
    image: {type: String, default: '', get: (image) => {
        return `${APP_URL}/${image}`;
     }},
}, { timestamps:true, toJSON: { getters: true } } );

export default mongoose.model('Post', postSchema, 'post')