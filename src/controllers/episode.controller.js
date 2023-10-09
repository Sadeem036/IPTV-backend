import episodeServices from "../services/episode.services.js"
import { httpResponse } from "../utils/httpResponse.js"

const episodeController = {

    add: async (req, res) => {
        try {
            const data = await episodeServices.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await episodeServices.getById(req.params.id)
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
            const data = await episodeServices.get()
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
            const data = await episodeServices.updateOne(req.params.id, req.body)
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
            const data = await episodeServices.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getAllStreamsByEpisodeId: async (req, res) => {
        try {
            const data = await episodeServices.getAllStreamsByEpisodeId(req.params.id)
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

export default episodeController