import mongoose from "mongoose";
import episodeModel from "../models/episode.js";
import seasonModel from "../models/season.js";
import seriesModel from "../models/series.js";

const seriesServices = {

    add: async (data) => {
        const series = await seriesModel.create(data)
        if(series) {
            return await seriesModel.findById(series?._id).populate("thumbnail_id")
        }
    },

    get: async (pageNumber, limit) => {
        const skip = limit * pageNumber - limit
        return seriesModel.find().limit(limit).skip(skip).populate("thumbnail_id")
    },

    getById: async (id) => {
        return seriesModel.findById(id)
    },

    updateOne: async (id, data) => {
        return seriesModel.findByIdAndUpdate(id, data, { new: true }).populate("thumbnail_id")
    },

    deleteOne: async (id) => {
        return seriesModel.deleteOne({ _id: id })
    },

    getAllSeasonBySeriesId: async (series_id) => {
        return seasonModel.find({ series_id }).populate("series_id")
    },

    // getAllEpissodeBySeriesId: async (series_id) => {
    //     const result = seasonModel.find({ series_id })
    //     return result
    // },
    // getAllEpissodeBySeriesId2: async (ids) => {
    //     return episodeModel.find({ season_id: { $in: ids } })
    // },

    getEpissodesBySeriesId: async (id) => {
        return seriesModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: "seasons",
                    localField: "_id",
                    foreignField: "series_id",
                    as: "Seasons"
                }
            },
            {
                $lookup: {
                    from: "episodes",
                    localField: "Seasons._id",
                    foreignField: "season_id",
                    as: "Episodes"
                }
            }
        ])
    }

}

export default seriesServices