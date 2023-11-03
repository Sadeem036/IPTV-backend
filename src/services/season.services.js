import seasonValidation from "../validations/season.validation.js";
import seasonModel from "../models/season.js"
import episodeModel from "../models/episode.js";
import mongoose from "mongoose";

const seasonServices = {

    add: async (data) => {
        const season = await seasonModel.create(data)
        if(season){
            return await seasonModel.findById(season?._id).populate("series_id")
        }
    },

    get: async (pageNumber, limit) => {
        const skip = limit * pageNumber - limit
        return seasonModel.find().limit(limit).skip(skip).populate("series_id")
    },

    getById: async (id) => {
        return seasonModel.findById(id)
    },

    updateOne: async (id, data) => {
        return seasonModel.findByIdAndUpdate(id, data, { new: true }).populate("series_id") 
    },

    deleteOne: async (id) => {
        return seasonModel.deleteOne({ _id: id })
    },

    getAllEpisodesBySeasonId: async (season_id, pageNumber, limit) => {
        // const skip = limit*pageNumber - limit
        // console.log("SKIP",skip);
        // return episodeModel.find({ season_id }).limit(limit).skip(skip)
        return seasonModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(season_id)
                }
            },
            {
                $lookup: {
                    from: "episodes",
                    localField: "_id",
                    foreignField: "season_id",
                    as: "Episodes"
                }
            }
        ])
    }
}

export default seasonServices