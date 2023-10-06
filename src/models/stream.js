import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        time: {
            type: Number,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"

        },
        episode_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Episode"
        }
    },
    {
        timestamps: true
    }
)

const streamModel = mongoose.model("Stream", schema)

export default streamModel