import express from "express"
import { validate } from "../middlewares/validate.js"
import genreSeriesValidation from "../validations/genre.series.validation.js"
import genreSeriesController from "../controllers/genre.series.controller.js"


const genreSeriesRouter = express.Router()

genreSeriesRouter.post("/",validate(genreSeriesValidation.add), genreSeriesController.add)

genreSeriesRouter.get("/", genreSeriesController.getAll)

genreSeriesRouter.get("/:id", validate(genreSeriesValidation.id), genreSeriesController.getOne)

genreSeriesRouter.patch("/:id", validate(genreSeriesValidation.update), genreSeriesController.updateOne)

genreSeriesRouter.delete("/:id", validate(genreSeriesValidation.id), genreSeriesController.deleteOne)

export default genreSeriesRouter