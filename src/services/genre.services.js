import genreSeriesModel from '../models/genre.series.js';
import seasonModel from '../models/season.js';
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

        const seasons = genreSeriesModel.aggregate([
            {
                $match: { genre_id },
            },
            {
                $lookup: {
                    from: 'Series', // Replace with the actual name of your "Series" collection
                    localField: 'series_id',
                    foreignField: '_id',
                    as: 'series',
                },
            },
            {
                $unwind: '$series',
            },
            {
                $lookup: {
                    from: 'Season', // Replace with the actual name of your "Season" collection
                    localField: 'series._id',
                    foreignField: 'series_id',
                    as: 'seasons',
                },
            },
            {
                $unwind: '$seasons',
            },
        ])

        return seasons
    }
}
