import episodeModel from "../models/episode.js";
import seasonModel from "../models/season.js";
import seriesModel from "../models/series.js";

const seriesServices = {

    add: async (data) => {
        return seriesModel.create(data)
    },

    get: async () => {
        return seriesModel.find()
    },

    getById: async (id) => {
        return seriesModel.findById(id)
    },

    updateOne: async (id, data) => {
        return seriesModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return seriesModel.deleteOne({ _id: id })
    },

    getAllSeasonBySeriesId: async (series_id) => {
        return seasonModel.find({ series_id })
    },

    getAllEpissodeBySeriesId: async (series_id) => {
        const result = seasonModel.find({ series_id })
        return result
    },
    getAllEpissodeBySeriesId2: async (ids) => {
        return episodeModel.find({ season_id: { $in: ids}})
    }

}

export default seriesServices