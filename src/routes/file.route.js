import express from "express"
import fileController from "../controllers/file.controller.js"
import { validate } from "../middlewares/validate.js"
import fileValidation from "../validations/file.validation.js"
import { authenticate } from "../middlewares/authenticate.js"
import upload from "../middlewares/upload.js"

const fileRouter = express.Router()

fileRouter.post("/", upload.single("file"), fileController.add)

fileRouter.get("/", authenticate, fileController.getAll)

fileRouter.get("/:id", validate(fileValidation.id), authenticate, fileController.getOne)

fileRouter.patch("/:id", validate(fileValidation.update), authenticate, upload.single("file") , fileController.updateOne)

fileRouter.delete("/:id", validate(fileValidation.id), authenticate, fileController.deleteOne)

export default fileRouter