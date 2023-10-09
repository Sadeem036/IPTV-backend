import express from "express"
import { validate } from "../middlewares/validate.js"
import episodeValidation from "../validations/episode.validation.js"
import episodeController from "../controllers/episode.controller.js"
import { authenticate } from "../middlewares/authenticate.js"

const episodeRouter = express.Router()

episodeRouter.post("/",validate(episodeValidation.add), authenticate, episodeController.add)

episodeRouter.get("/", authenticate, episodeController.getAll)

episodeRouter.get("/:id", validate(episodeValidation.id), authenticate, episodeController.getOne)

episodeRouter.patch("/:id", validate(episodeValidation.update), authenticate, episodeController.updateOne)

episodeRouter.delete("/:id", validate(episodeValidation.id), authenticate, episodeController.deleteOne)

episodeRouter.get("/:id/streams", validate(episodeValidation.id),  authenticate, episodeController.getAllStreamsByEpisodeId)

export default episodeRouter