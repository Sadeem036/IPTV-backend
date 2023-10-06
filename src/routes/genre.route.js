import express from "express"
import { validate } from "../middlewares/validate.js"
import genreValidation from "../validations/genre.validation.js"
import genreController from "../controllers/genre.controller.js"

const genreRouter = express.Router()

genreRouter.post("/", validate(genreValidation.add), genreController.add)

genreRouter.get("/:id", validate(genreValidation.id), genreController.getOne)

genreRouter.get("/", genreController.getAll)

genreRouter.patch("/:id", validate(genreValidation.update), genreController.updateOne)

genreRouter.delete("/:id", validate(genreValidation.id), genreController.deleteOne)

export default genreRouter