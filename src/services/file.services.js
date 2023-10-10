import fileModel from "../models/file.js";

const fileServices = {

    add: async (data) => {
        return fileModel.create(data)
    },

    get: async ( pageNumber , limit ) => {
        const skip = limit*pageNumber - limit
        return fileModel.find().limit(limit).skip(skip)
    },

    getById: async (id) => {
        return fileModel.findById(id)
    },

    updateOne: async (id, data) => {
        return fileModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return fileModel.deleteOne({ _id: id })
    }
}

export default fileServices