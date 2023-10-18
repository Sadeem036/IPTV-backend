import express from "express"
import { validate } from "../middlewares/validate.js"
import genreValidation from "../validations/genre.validation.js"
import genreController from "../controllers/genre.controller.js"
import { authenticate } from "../middlewares/authenticate.js"

const genreRouter = express.Router()

genreRouter.post("/", validate(genreValidation.add), authenticate, genreController.add)

genreRouter.get("/:id", validate(genreValidation.id), authenticate, genreController.getOne)

genreRouter.get("/", authenticate, genreController.getAll)

genreRouter.patch("/:id", validate(genreValidation.update), authenticate, genreController.updateOne)

genreRouter.delete("/:id", validate(genreValidation.id), authenticate, genreController.deleteOne)

genreRouter.get("/:id/series", validate(genreValidation.id), authenticate, genreController.getSeriesByGenreId)

genreRouter.get("/:id/series/seasons", validate(genreValidation.id), authenticate, genreController.getAllSeasonOfAllSeriesByGenreId)

export default genreRouter