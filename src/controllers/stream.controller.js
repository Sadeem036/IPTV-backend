import streamServices from "../services/stream.services.js"
import { httpResponse } from "../utils/httpResponse.js"

const streamController = {

    add: async (req, res) => {
        try {
            const data = await streamServices.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await streamServices.getById(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getAll: async (req, res) => {
        try {
            const data = await streamServices.get()
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    updateOne: async (req, res) => {
        try {
            const data = await streamServices.updateOne(req.params.id, req.body)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    deleteOne: async (req, res) => {
        try {
            const data = await streamServices.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getAnEpisodeOfStreamByStreamId: async (req, res) => {
        try {
            const data = await streamServices.getAnEpisodeOfStreamByStreamId(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getuserOfStreamByStreamId: async (req, res) => {
        try {
            const data = await streamServices.getUserOfStreamByStreamId(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    }
}

export default streamController