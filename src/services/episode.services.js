import mongoose from "mongoose"
import episodeModel from "../models/episode.js"
import streamModel from "../models/stream.js"

const episodeServices = {

    add: async (data) => {
        return episodeModel.create(data)
    },

    get: async ( pageNumber , limit ) => {
        const skip = limit*pageNumber - limit
        return episodeModel.find().limit(limit).skip(skip)
    },

    getById: async (id) => {
        return episodeModel.findById(id)
    },

    updateOne: async (id, data) => {
        return episodeModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return episodeModel.deleteOne({ _id: id })
    },

    getAllStreamsByEpisodeId: async (episode_id) => {
        // return streamModel.find({ episode_id }).populate("episode_id")
        return episodeModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(episode_id)
                }
            },
            {
                $lookup: {
                    from: "streams",
                    localField: "_id",
                    foreignField: "episode_id",
                    as: "Streams"
                }
            }
        ])
    }
}

export default episodeServices