import streamModel from "../models/stream.js";
import userModel from "../models/user.js";

export const userService = {

    add: async (data) => {
        return userModel.create(data)
    },

    get: async ( pageNumber, limit ) => {
        const skip = limit*pageNumber - limit
        return userModel.find().limit(limit).skip(skip)
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
    },

    getUserStreams: async (id) => {
        return streamModel.find({user_id: id})
    },

    getStreamByUserIdAndStreamId: async (user_id, stream_id) => {
        return streamModel.find({ user_id, stream_id})
    },

    deleteStreamByUserIdAndStreamId:async (user_id, stream_id) => {
        return streamModel.deleteOne({ user_id, stream_id})
    }
}