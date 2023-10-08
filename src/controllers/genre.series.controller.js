import genreSeriesServices from "../services/genre.series.services.js"
import { httpResponse } from "../utils/httpResponse.js"

const genreSeriesController = {

    add: async (req, res) => {
        try {
            const data = await genreSeriesServices.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await genreSeriesServices.getById(req.params.id)
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
            const data = await genreSeriesServices.get()
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
            const data = await genreSeriesServices.updateOne(req.params.id, req.body)
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
            const data = await genreSeriesServices.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },
}

export default genreSeriesController