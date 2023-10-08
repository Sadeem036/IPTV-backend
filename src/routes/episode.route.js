import express from "express"
import { validate } from "../middlewares/validate.js"
import episodeValidation from "../validations/episode.validation.js"
import episodeController from "../controllers/episode.controller.js"

const episodeRouter = express.Router()

episodeRouter.post("/",validate(episodeValidation.add), episodeController.add)

episodeRouter.get("/", episodeController.getAll)

episodeRouter.get("/:id", validate(episodeValidation.id), episodeController.getOne)

episodeRouter.patch("/:id", validate(episodeValidation.update), episodeController.updateOne)

episodeRouter.delete("/:id", validate(episodeValidation.id), episodeController.deleteOne)

export default episodeRouter