import express from "express";
import userController from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import userValidation from "../validations/user.validation.js";
import { authenticate } from "../middlewares/authenticate.js";

const userRoute = express.Router();

userRoute.post(
  "/register",
  validate(userValidation.register),
  userController.add
);

userRoute.get("/", userController.get);

userRoute.get("/user-data", authenticate, userController.userdata);

userRoute.post("/login", validate(userValidation.login), userController.login);

userRoute.get(
  "/:id",
  authenticate,
  validate(userValidation.id),
  userController.getOne
);

userRoute.patch(
  "/:id",
  validate(userValidation.update),
  authenticate,
  userController.updateOne
);

userRoute.delete("/:id", validate(userValidation.id), userController.deleteOne);

userRoute.delete("/delete", userController.delete);

userRoute.get(
  "/:id/streams",
  validate(userValidation.id),
  userController.getUserStreams
);

userRoute.get(
  "/:id/streams/:streamId",
  validate(userValidation.id),
  userController.getStreamByUserIdAndStreamID
);

userRoute.delete(
  "/:id/streams/:streamId",
  validate(userValidation.id),
  userController.deleteStreamByUserIdAndStreamId
);

export default userRoute;
