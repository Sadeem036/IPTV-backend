import express from "express"
import { validate } from "../middlewares/validate.js"
import seasonValidation from "../validations/season.validation.js"
import seasonController from "../controllers/season.controller.js"

const seasonRouter = express.Router()

seasonRouter.post("/", validate(seasonValidation.add), seasonController.add)

seasonRouter.get("/", seasonController.getAll)

seasonRouter.get("/:id", validate(seasonValidation.id), seasonController.getOne)

seasonRouter.patch("/:id", validate(seasonValidation.update), seasonController.updateOne)

seasonRouter.delete("/:id", validate(seasonValidation.id), seasonController.deleteOne)

export default seasonRouter