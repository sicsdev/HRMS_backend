import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    post_date: { type: Date },
    image: {
        type: String, default: '', get: (image) => {
            return `${APP_URL} /${image}`;
        }
    },
    like: [
        { type: Schema.Types.ObjectId, ref: 'NewUser' }
    ],
    comment: [
        {
            userId: { type: Schema.Types.ObjectId, ref: 'NewUser' },
            comments: { type: String }

        }
    ]
}, { timestamps: true, toJSON: { getters: true } });

export default mongoose.model('Post', postSchema, 'post')