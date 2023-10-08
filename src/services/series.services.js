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
    }
}

export default seriesServices