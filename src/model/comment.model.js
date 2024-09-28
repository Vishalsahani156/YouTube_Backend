import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema({
    content: {
        type: String,

    },
    Video: {
        tyepe: Schema.Types.ObjectId,
        ref: "Video",
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: " owner",
    },


}, { timestamps: true })



export const Comment = mongoose.model("Comment", commentSchema)