import fileModel from "../models/file.js";
import { v2 as cloudinary } from "cloudinary";

const fileServices = {
  add: async (req) => {
    try {
      req.file.path = req.file.path.replace(`\\`, `/`);
      let file;
      await cloudinary.uploader.upload(req.file.path, (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log("RESULT", result);
        file = {
          original_name: req.file.originalname,
          current_name: req.file.filename,
          type: req.file.mimetype,
          path: result.secure_url,
          size: req.file.size,
        };
      });
      return await fileModel.create(file);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  get: async (pageNumber, limit) => {
    const skip = limit * pageNumber - limit;
    return fileModel.find().limit(limit).skip(skip);
  },

  getById: async (id) => {
    return fileModel.findById(id);
  },

  updateOne: async (id, req) => {
    req.file.path = req.file.path.replace(`\\`, `/`);
    const file = {
      original_name: req.file.originalname,
      current_name: req.file.filename,
      type: req.file.mimetype,
      path: `${req.protocol}://${req.get("host")}/${req.file.path}`,
      size: req.file.size,
    };
    return fileModel.findByIdAndUpdate(id, file);
  },

  deleteOne: async (id) => {
    return fileModel.deleteOne({ _id: id });
  },
};

export default fileServices;
