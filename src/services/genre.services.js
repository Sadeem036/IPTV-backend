import mongoose, { mongo } from 'mongoose';
// import genreSeriesModel from '../models/genre.series.js';
// import seasonModel from '../models/season.js';
// import seriesModel from '../models/series.js';
import genreModel from './../models/genre.js';

export const genreServices = {

    add: async (data) => {
        return genreModel.create(data)
    },

    get: async (pageNumber, limit) => {
        const skip = limit * pageNumber - limit
        return genreModel.find().limit(limit).skip(skip)
    },

    getById: async (id) => {
        return genreModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id)
                }
            }
        ])
    },

    updateOne: async (id, data) => {
        return genreModel.findByIdAndUpdate(id, data, { new: true })
    },

    deleteOne: async (id) => {
        return genreModel.deleteOne({ _id: id })
    },

    getSeriesBygenreId: async (genre_id) => {
        return genreModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(genre_id)
                }
            },
            {
                $lookup: {
                    from: "genreseries",
                    localField: "_id",
                    foreignField: "genre_id",
                    as: "Genre_Series"
                }
            },
            {
                $lookup: {
                    from: "series",
                    localField: "Genre_Series.series_id",
                    foreignField: "_id",
                    as: "Series"
                }
            }
        ])
        // return genreSeriesModel.find({ genre_id }).populate("genre_id").populate("series_id")
    },

    getAllSeasonOfAllSeriesByGenreId: async (genre_id) => {
        return genreModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(genre_id)
                }
            },
            {
                $lookup: {
                    from: "genreseries",
                    localField: "_id",
                    foreignField: "genre_id",
                    as: "Genre_Series"
                }
            },
            {
                $lookup: {
                    from: "series",
                    localField: "Genre_Series.series_id",
                    foreignField: "_id",
                    as: "Series"
                }
            },
            {
                $lookup: {
                    from: "seasons",
                    localField: "Series._id",
                    foreignField: "series_id",
                    as: "Seasons"
                }
            }
        ])
        //     const genreSeries = await genreSeriesModel.find({ genre_id })
        //     if(genreSeries){
        //         const seriesIDs = genreSeries.map(e => e.series_id)
        //         const ids = seriesIDs.map((id) => new mongoose.Types.ObjectId(id))
        //         const series = await seriesModel.find({ _id: { $in: ids}})
        //         if(series){
        //             const seriesIDS = series.map(e => e._id)
        //             const IDS = seriesIDS.map((id) => new mongoose.Types.ObjectId(id))
        //             const season = await seasonModel.find({ series_id: { $in: IDS }})
        //             return season
        //         }
        //     }
        //     else return null
    }
}
