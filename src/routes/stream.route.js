import express from "express"
import { validate } from "../middlewares/validate.js"
import streamValidation from "../validations/stream.validation.js"
import streamController from "../controllers/stream.controller.js"


const streamRouter = express.Router()

streamRouter.post("/",validate(streamValidation.add), streamController.add)

streamRouter.get("/", streamController.getAll)

streamRouter.get("/:id", validate(streamValidation.id), streamController.getOne)

streamRouter.patch("/:id", validate(streamValidation.update), streamController.updateOne)

streamRouter.delete("/:id", validate(streamValidation.id), streamController.deleteOne)

export default streamRouter