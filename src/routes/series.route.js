import express from "express"
import { validate } from "../middlewares/validate.js"
import seriesValidation from "../validations/series.validation.js"
import seriesController from "../controllers/series.controller.js"

const seriesRouter = express.Router()

seriesRouter.post("/", validate(seriesValidation.add), seriesController.add)

seriesRouter.get("/", seriesController.getAll)

seriesRouter.get("/:id", validate(seriesValidation.id), seriesController.getOne)

seriesRouter.patch("/:id", validate(seriesValidation.update), seriesController.updateOne)

seriesRouter.delete("/:id", validate(seriesValidation.id), seriesController.deleteOne)

export default seriesRouter