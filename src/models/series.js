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
        trailer_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "File"
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

const seriesModel = mongoose.model("Series", schema)

export default seriesModel