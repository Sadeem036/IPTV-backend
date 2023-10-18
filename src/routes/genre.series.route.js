import express from "express"
import { validate } from "../middlewares/validate.js"
import genreSeriesValidation from "../validations/genre.series.validation.js"
import genreSeriesController from "../controllers/genre.series.controller.js"
import { authenticate } from "../middlewares/authenticate.js"


const genreSeriesRouter = express.Router()

genreSeriesRouter.post("/",validate(genreSeriesValidation.add), authenticate, genreSeriesController.add)

genreSeriesRouter.get("/", authenticate, genreSeriesController.getAll)

genreSeriesRouter.get("/:id", validate(genreSeriesValidation.id), authenticate, genreSeriesController.getOne)

genreSeriesRouter.patch("/:id", validate(genreSeriesValidation.update), authenticate, genreSeriesController.updateOne)

genreSeriesRouter.delete("/:id", validate(genreSeriesValidation.id), authenticate, genreSeriesController.deleteOne)

export default genreSeriesRouter