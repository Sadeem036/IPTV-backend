import express from "express"
import userController from "../controllers/user.controller.js"
import { validate } from "../middlewares/validate.js"
import userValidation from "../validations/user.validation.js"
import { authenticate } from "../middlewares/authenticate.js"

const userRoute = express.Router()

userRoute.post("/register",validate(userValidation.register) ,userController.add)

userRoute.get("/", userController.get)

userRoute.post("/login", validate(userValidation.login), userController.login)

userRoute.get("/:id", validate(userValidation.id), userController.getOne)

userRoute.patch("/:id",validate(userValidation.update), authenticate, userController.updateOne)

userRoute.delete("/:id", validate(userValidation.id), userController.deleteOne)

userRoute.delete("/delete", userController.delete)

export default userRoute