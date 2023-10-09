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

    get: async () => {
        return streamModel.find()
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

    getSeasonOfAnEpisodeOfAStreamByStreamId: async ( stream_id ) =>  {
        return streamModel.find({ _id: stream_id })
    },

    getSeasonOfAnEpisodeOfAStreamByStreamId2: async ( episodeIds ) =>  {
        return episodeModel.find({ _id: { $in: episodeIds }})
    },
    getSeasonOfAnEpisodeOfAStreamByStreamId3: async (season_id) => {
        return seasonModel.find({ _id: { $in: season_id}})
    },

    getTheSeriesOfSeasonOfAnEpisodeOfStreamByStreamId: async ( stream_id) => {
        const data = await streamModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(stream_id)
                }
            }
        ])
        if(data){
            const res = await episodeModel.find({ _id: data[0].episode_id })
            if(res){
                const response = await seasonModel.find({ _id: res[0].season_id})
                if(response){
                    const result = await seriesModel.find({ _id: response[0].series_id})
                    return result
                }
            }
        }
        else return null
    },
    getTheGenreOfSeriesOfSeasonOfAnEpisodeOfStreamByStreamId : async (stream_id) => {
        const stream = await streamModel.find({_id: stream_id})
        if(stream){
            const episode = await episodeModel.find({ _id: stream[0].episode_id})
            if(episode){
                const season = await seasonModel.find({ _id: episode[0].season_id})
                if(season){
                    const series = await seriesModel.find({ _id: season[0].series_id})
                    if(series){
                        const genreSeries = await genreSeriesModel.find({ series_id: series[0]._id})
                        if(genreSeries){
                            const genre = await genreModel.find({ _id: genreSeries[0].genre_id})
                            return genre
                        }
                    }
                }
            }
        }
        else return null
    }

}

export default streamServices