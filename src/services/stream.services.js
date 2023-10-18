import mongoose, { Mongoose } from "mongoose"
import episodeModel from "../models/episode.js"
import seasonModel from "../models/season.js"
import streamModel from "../models/stream.js"
import seriesModel from "../models/series.js"
import genreSeriesModel from './../models/genre.series.js';
import genreModel from "../models/genre.js"

const streamServices = {

    add: async (data) => {
        return streamModel.create(data)
    },

    get: async (pageNumber, limit) => {
        const skip = limit * pageNumber - limit
        return streamModel.find().limit(limit).skip(skip)
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
    },

    getSeasonOfAnEpisodeOfAStreamByStreamId: async (stream_id) => {
        // const stream = await streamModel.find({ _id: stream_id})
        // if(stream) {
        //     const episodeIds = stream.map(e => e.episode_id)
        //     const ids = episodeIds.map((id) => new mongoose.Types.ObjectId(id))
        //     const episode = await episodeModel.find({ _id: { $in: ids }})
        //     if(episode){
        //         const seasonId = episode.map(e => e.season_id)
        //         const id = seasonId.map((id) => new mongoose.Types.ObjectId(id))
        //         const season = seasonModel.find({ _id: { $in: id}})
        //         return season
        //     }
        // }
        // else return null
        return streamModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(stream_id)
                }
            },
            {
                $lookup: {
                    from: "episodes",
                    localField: "episode_id",
                    foreignField: "_id",
                    as: "Episodes"
                }
            },
            {
                $lookup: {
                    from: "seasons",
                    localField: "Episodes.season_id",
                    foreignField: "_id",
                    as: "Season"
                }
            }
        ])
    },

    getTheSeriesOfSeasonOfAnEpisodeOfStreamByStreamId: async (stream_id) => {
        // const data = await streamModel.aggregate([
        //     {
        //         $match: {
        //             _id: new mongoose.Types.ObjectId(stream_id)
        //         }
        //     }
        // ])
        // if(data){
        //     const res = await episodeModel.find({ _id: data[0].episode_id })
        //     if(res){
        //         const response = await seasonModel.find({ _id: res[0].season_id})
        //         if(response){
        //             const result = await seriesModel.find({ _id: response[0].series_id})
        //             return result
        //         }
        //     }
        // }
        // else return null
        return streamModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(stream_id)
                }
            },
            {
                $lookup: {
                    from: "episodes",
                    localField: "episode_id",
                    foreignField: "_id",
                    as: "Episodes"
                }
            },
            {
                $lookup: {
                    from: "seasons",
                    localField: "Episodes.season_id",
                    foreignField: "_id",
                    as: "Seasons"
                }
            },
            {
                $lookup: {
                    from: "series",
                    localField: "Seasons.series_id",
                    foreignField: "_id",
                    as: "Series"
                }
            }
        ])
    },
    getTheGenreOfSeriesOfSeasonOfAnEpisodeOfStreamByStreamId: async (stream_id) => {
        // const stream = await streamModel.find({_id: stream_id})
        // if(stream){
        //     const episode = await episodeModel.find({ _id: stream[0].episode_id})
        //     if(episode){
        //         const season = await seasonModel.find({ _id: episode[0].season_id})
        //         if(season){
        //             const series = await seriesModel.find({ _id: season[0].series_id})
        //             if(series){
        //                 const genreSeries = await genreSeriesModel.find({ series_id: series[0]._id})
        //                 if(genreSeries){
        //                     const genre = await genreModel.find({ _id: genreSeries[0].genre_id})
        //                     return genre
        //                 }
        //             }
        //         }
        //     }
        // }
        // else return null
        return streamModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(stream_id)
                }
            },
            {
                $lookup: {
                    from: "episodes",
                    localField: "episode_id",
                    foreignField: "_id",
                    as: "Episodes"
                }
            },
            {
                $lookup: {
                    from: "seasons",
                    localField: "Episodes.season_id",
                    foreignField: "_id",
                    as: "Seasons"
                }
            },
            {
                $lookup: {
                    from: "series",
                    localField: "Seasons.series_id",
                    foreignField: "_id",
                    as: "Series"
                }
            },
            {
                $lookup: {
                    from: "genreseries",
                    localField: "Series._id",
                    foreignField: "series_id",
                    as: "GenreSeries"
                }
            },
            {
                $lookup: {
                    from: "genres",
                    localField: "GenreSeries.genre_id",
                    foreignField: "_id",
                    as: "Genre"
                }
            }
        ])
    }
}

export default streamServices