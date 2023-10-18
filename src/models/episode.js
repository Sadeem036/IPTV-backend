import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        season_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Season"
        },
        thumbnail_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "File"
        }
    },
    {
        timestamps: true
    }
)

const episodeModel = mongoose.model("Episode", schema)

export default episodeModel