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
    }
}

export default seriesServices