import mongoose from "mongoose";
import { APP_URL } from "../config";

const Schema = mongoose.Schema;

const applyleaveSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "NewUser" },

    leaves: {

        type: Array,



    },
    status: { type: String, default: "Pending" },
    date: { type: String },

    reason: { type: String, required: true },
    type_of_day: { type: String, required: true }


}, { timestamps: true });

export default mongoose.model('Apply_leave', applyleaveSchema, 'apply_leave')
