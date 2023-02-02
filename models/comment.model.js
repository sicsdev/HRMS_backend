import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "NewUser" },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    comment: {
        type: Array,

    }

}, { timestamps: true, toJSON: { getters: true } });

export default mongoose.model('Comment', commentSchema, 'comment')
