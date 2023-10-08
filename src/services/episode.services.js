import episodeModel from "../models/episode.js"

const episodeServices = {

    add: async (data) => {
        return episodeModel.create(data)
    },

    get: async () => {
        return episodeModel.find()
    },

    getById: async (id) => {
        return episodeModel.findById(id)
    },

    updateOne: async (id, data) => {
        return episodeModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return episodeModel.deleteOne({ _id: id })
    }
}

export default episodeServices