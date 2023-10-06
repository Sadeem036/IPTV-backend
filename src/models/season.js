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
        series_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Series"
        }
    },
    {
        timestamps: true
    }
)

const seasonModel = mongoose.model("Season", schema)

export default seasonModel