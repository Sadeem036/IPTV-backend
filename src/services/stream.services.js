import streamModel from "../models/stream.js"

const streamServices = {

    add: async (data) => {
        return streamModel.create(data)
    },

    get: async () => {
        return streamModel.find()
    },

    getById: async (id) => {
        return streamModel.findById(id)
    },

    updateOne: async (id, data) => {
        return streamModel.findByIdAndUpdate(id, data, { new: true })
    },
    
    deleteOne: async (id) => {
        return streamModel.deleteOne({ _id: id })
    },

    getAnEpisodeOfStreamByStreamId: async (stream_id) => {
        return streamModel.find({ _id: stream_id }).populate("episode_id")
    },

    getUserOfStreamByStreamId: async (stream_id) => {
        return streamModel.find({ _id: stream_id }).populate("user_id")
    }
}

export default streamServices