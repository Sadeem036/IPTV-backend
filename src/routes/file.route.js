import express from "express"
import fileController from "../controllers/file.controller.js"
import { validate } from "../middlewares/validate.js"
import fileValidation from "../validations/file.validation.js"

const fileRouter = express.Router()

fileRouter.post("/",validate(fileValidation.add), fileController.add)

fileRouter.get("/", fileController.getAll)

fileRouter.get("/:id", validate(fileValidation.id), fileController.getOne)

fileRouter.patch("/:id", validate(fileValidation.update), fileController.updateOne)

fileRouter.delete("/:id", validate(fileValidation.id), fileController.deleteOne)

export default fileRouter