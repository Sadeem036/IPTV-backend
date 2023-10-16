import mongoose from "mongoose"
import seriesServices from "../services/series.services.js"
import { httpResponse } from "../utils/httpResponse.js"

const seriesController = {

    add: async (req, res) => {
        try {
            const data = await seriesServices.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await seriesServices.getById(req.params.id)
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
            const data = await seriesServices.get(pageNumber, limit)
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
            const data = await seriesServices.updateOne(req.params.id, req.body)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    deleteOne: async (req, res) => {
        try {
            const data = await seriesServices.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    getAllSeasonBySeriesId: async (req, res) => {
        try {
            const data = await seriesServices.getAllSeasonBySeriesId(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    // getAllEpissodeBySeriesId: async ( req, res) => {
    //     try {
    //         const data = await seriesServices.getAllEpissodeBySeriesId(req.params.id)
    //         if (data) {
    //             const seasonIds = data.map(e => e._id)
    //             const ids = seasonIds.map((id) => new mongoose.Types.ObjectId(id))
    //             const result = await seriesServices.getAllEpissodeBySeriesId2(ids)
    //             return httpResponse.SUCCESS(res, result)
    //         }
    //         return httpResponse.NOT_FOUND(res)
    //     }
    //     catch (error) {
    //         return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
    //     }
    // },

    getEpisodeBySeriesId: async (req, res) => {
        try {
            const data = await seriesServices.getEpissodesBySeriesId(req.params.id)
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

export default seriesController