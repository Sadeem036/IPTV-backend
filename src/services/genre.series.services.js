import genreSeriesModel from "../models/genre.series.js"

const genreSeriesServices = {

    add: async (data) => {
        return genreSeriesModel.create(data)
    },

    get: async () => {
        return genreSeriesModel.find()
    },

    getById: async (id) => {
        return genreSeriesModel.findById(id)
    },

    updateOne: async (id, data) => {
        return genreSeriesModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return genreSeriesModel.deleteOne({ _id: id })
    }
}

export default genreSeriesServices