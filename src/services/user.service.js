import userModel from "../models/user.js";

export const userService = {

    add: async (data) => {
        return userModel.create(data)
    },

    get: async () => {
        return userModel.find()
    },

    login: async (data) => {
        return userModel.findOne({ email: data.email})
    },

    getByID: async (data) => {
        return userModel.findById(data)
    },

    getByIdAndUpdate: async (id, data) => {
        return userModel.findByIdAndUpdate(id, data, {new: true})
    },

    deleteOne: async (id) => {
        return userModel.deleteOne({_id: id})
    },
    delete: async () => {
        return userModel.deleteMany()
    }
}