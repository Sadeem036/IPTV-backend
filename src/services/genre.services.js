import mongoose from 'mongoose';
import genreSeriesModel from '../models/genre.series.js';
import seasonModel from '../models/season.js';
import seriesModel from '../models/series.js';
import genreModel from './../models/genre.js';

export const genreServices = {

    add: async (data) => {
        return genreModel.create(data)
    },

    get: async () => {
        return genreModel.find()
    },

    getById: async (id) => {
        return genreModel.findById(id)
    },

    updateOne: async (id, data) => {
        return genreModel.findByIdAndUpdate(id, data, { new: true })
    },

    deleteOne: async (id) => {
        return genreModel.deleteOne({ _id: id })
    },

    getSeriesBygenreId: async (genre_id) => {
        return genreSeriesModel.find({ genre_id }).populate("genre_id").populate("series_id")
    },

    getAllSeasonOfAllSeriesByGenreId: async (genre_id) => {
        const genreSeries = await genreSeriesModel.find({ genre_id })
        if(genreSeries){
            const seriesIDs = genreSeries.map(e => e.series_id)
            const ids = seriesIDs.map((id) => new mongoose.Types.ObjectId(id))
            const series = await seriesModel.find({ _id: { $in: ids}})
            if(series){
                const seriesIDS = series.map(e => e._id)
                const IDS = seriesIDS.map((id) => new mongoose.Types.ObjectId(id))
                const season = await seasonModel.find({ series_id: { $in: IDS }})
                return season
            }
        }
        else return null
    }
}
