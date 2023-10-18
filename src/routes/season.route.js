import express from "express"
import { validate } from "../middlewares/validate.js"
import seasonValidation from "../validations/season.validation.js"
import seasonController from "../controllers/season.controller.js"
import { authenticate } from "../middlewares/authenticate.js"

const seasonRouter = express.Router()

seasonRouter.post("/", validate(seasonValidation.add), authenticate, seasonController.add)

seasonRouter.get("/", authenticate, seasonController.getAll)

seasonRouter.get("/:id", validate(seasonValidation.id), authenticate, seasonController.getOne)

seasonRouter.patch("/:id", validate(seasonValidation.update), authenticate, seasonController.updateOne)

seasonRouter.delete("/:id", validate(seasonValidation.id), authenticate, seasonController.deleteOne)

seasonRouter.get("/:id/episodes", validate(seasonValidation.id), authenticate, seasonController.getAllEpisodesBySeasonId)

export default seasonRouter