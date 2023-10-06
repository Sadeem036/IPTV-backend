import genreModel from './../models/genre.js';

export const genreServices = {

    add: async (data) => {
        return genreModel.create(data)
    },

    get: async () => {
        return genreModel.find()
    },

    getById: async (id) => {
        return genreModel.findById(id)
    },

    updateOne: async (id, data) => {
        return genreModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return genreModel.deleteOne({ _id: id })
    }
}
