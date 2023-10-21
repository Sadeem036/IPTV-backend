import { genreServices } from "../services/genre.services.js"
import { httpResponse } from "../utils/httpResponse.js"

const genreController = {

    add: async (req, res) => {
        try {
            const data = await genreServices.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            if(error.message == "Genre already exist with this name"){
                return httpResponse.NOT_ALLOWED(res)
            }
            else{
                return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
            }
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await genreServices.getById(req.params.id)
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
            const data = await genreServices.get(pageNumber, limit)
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
            const data = await genreServices.updateOne(req.params.id, req.body)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_ALLOWED(res)
        }
        catch (error) {
            if(error.message == "Genre name already exists"){
                return httpResponse.NOT_ALLOWED(res)
            }
            else {
                return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
            }
        }
    },

    deleteOne: async (req, res) => {
        try {
            const data = await genreServices.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getSeriesByGenreId: async (req, res) => {
        try {
            const data = await genreServices.getSeriesBygenreId(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getAllSeasonOfAllSeriesByGenreId: async (req, res) => {
        try {
            const data = await genreServices.getAllSeasonOfAllSeriesByGenreId(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },
}

export default genreController