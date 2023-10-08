import seasonValidation from "../validations/season.validation.js";
import seasonModel from "../models/season.js"

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
    }
}

export default seasonServices