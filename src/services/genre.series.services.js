import genreSeriesModel from "../models/genre.series.js"

const genreSeriesServices = {

    add: async (data) => {
        return genreSeriesModel.create(data)
    },

    get: async (pageNumber, limit) => {
        const skip = limit * pageNumber - limit
        return genreSeriesModel.find().limit(limit).skip(skip).populate("genre_id").populate("series_id")
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