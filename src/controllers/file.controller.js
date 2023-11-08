import fileServices from "../services/file.services.js";
import { httpResponse } from "../utils/httpResponse.js";

const fileController = {
  add: async (req, res) => {
    // console.log(req.file);
    try {
      if (req.file) {
        const data = await fileServices.add(req);
        return httpResponse.CREATED(res, data);
      } else {
        return httpResponse.NOT_FOUND(res);
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const data = await fileServices.getById(req.params.id);
      if (data) {
        return httpResponse.SUCCESS(res, data);
      }
      return httpResponse.NOT_FOUND(res);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getAll: async (req, res) => {
    try {
      const { pageNumber, limit } = req.query;
      const data = await fileServices.get(pageNumber, limit);
      if (data) {
        return httpResponse.SUCCESS(res, data);
      }
      return httpResponse.NOT_FOUND(res);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  updateOne: async (req, res) => {
    try {
      if (req.file) {
        const data = await fileServices.updateOne(req.params.id, req);
        return httpResponse.CREATED(res, data);
      } else {
        return httpResponse.NOT_FOUND(res);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const data = await fileServices.deleteOne(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};

export default fileController;
