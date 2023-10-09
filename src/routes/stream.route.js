import express from "express"
import { validate } from "../middlewares/validate.js"
import streamValidation from "../validations/stream.validation.js"
import streamController from "../controllers/stream.controller.js"
import { authenticate } from "../middlewares/authenticate.js"


const streamRouter = express.Router()

streamRouter.post("/",validate(streamValidation.add), authenticate, streamController.add)

streamRouter.get("/", authenticate, streamController.getAll)

streamRouter.get("/:id", validate(streamValidation.id), authenticate, streamController.getOne)

streamRouter.patch("/:id", validate(streamValidation.update), authenticate, streamController.updateOne)

streamRouter.delete("/:id", validate(streamValidation.id), authenticate, streamController.deleteOne)

streamRouter.get("/:id/episode", validate(streamValidation.id), authenticate, streamController.getAnEpisodeOfStreamByStreamId)

streamRouter.get("/:id/user", validate(streamValidation.id), authenticate, streamController.getuserOfStreamByStreamId)

streamRouter.get("/:id/episode/season", validate(streamValidation.id), streamController.getSeasonOfAnEpisodeOfAStreamByStreamId)

streamRouter.get("/:id/episode/season/series", validate(streamValidation.id), streamController.getTheSeriesOfSeasonOfAnEpisodeOfStreamByStreamId)

streamRouter.get("/:id/episode/season/series/genre", validate(streamValidation.id), streamController.getTheGenreOfSeriesOfSeasonOfAnEpisodeOfStreamByStreamId)

export default streamRouter