import express from "express"
import { validate } from "../middlewares/validate.js"
import seriesValidation from "../validations/series.validation.js"
import seriesController from "../controllers/series.controller.js"
import { authenticate } from "../middlewares/authenticate.js"

const seriesRouter = express.Router()

seriesRouter.post("/", validate(seriesValidation.add), authenticate, seriesController.add)

seriesRouter.get("/", authenticate, seriesController.getAll)

seriesRouter.get("/:id", validate(seriesValidation.id), authenticate, seriesController.getOne)

seriesRouter.patch("/:id", validate(seriesValidation.update), authenticate, seriesController.updateOne)

seriesRouter.delete("/:id", validate(seriesValidation.id), authenticate, seriesController.deleteOne)

seriesRouter.get("/:id/seasons", validate(seriesValidation.id), authenticate, seriesController.getAllSeasonBySeriesId)

seriesRouter.get("/:id/seasons/episodes", validate(seriesValidation.id), seriesController.getEpisodeBySeriesId)

export default seriesRouter