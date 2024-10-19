import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const playlistSchema = new Schema({
    playList: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        loworcase: true,
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },


}, { timestamps: true })

playlistSchema.plugin(mongooseAggregatePaginate)

export const Playlist = mongoose.model("Playlist", playlistSchema)