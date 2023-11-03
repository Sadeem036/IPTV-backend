import seasonServices from "../services/season.services.js"
import { httpResponse } from "../utils/httpResponse.js"

const seasonController = {

    add: async (req, res) => {
        try {
            const data = await seasonServices.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await seasonServices.getById(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getAll: async (req, res) => {
        try {
            const { pageNumber, limit } = req.query
            const data = await seasonServices.get(pageNumber, limit)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    updateOne: async (req, res) => {
        try {
            const data = await seasonServices.updateOne(req.params.id, req.body)
            if (data) {
                return httpResponse.CREATED(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    deleteOne: async (req, res) => {
        try {
            const data = await seasonServices.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getAllEpisodesBySeasonId: async (req, res) => {
        try {
            const { pageNumber, limit } = req.query
            const data = await seasonServices.getAllEpisodesBySeasonId(req.params.id, pageNumber, limit)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    }
}

export default seasonController