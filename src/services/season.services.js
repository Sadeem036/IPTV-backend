import seasonValidation from "../validations/season.validation.js";
import seasonModel from "../models/season.js"
import episodeModel from "../models/episode.js";

const seasonServices = {

    add: async (data) => {
        return seasonModel.create(data)
    },

    get: async () => {
        return seasonModel.find()
    },

    getById: async (id) => {
        return seasonModel.findById(id)
    },

    updateOne: async (id, data) => {
        return seasonModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return seasonModel.deleteOne({ _id: id })
    },

    getAllEpisodesBySeasonId: async (season_id) => {
        return episodeModel.find({ season_id })
    }
}

export default seasonServices