import fileModel from "../models/file.js";

const fileServices = {

    add: async (req) => {
        req.file.path = req.file.path.replace(`\\`, `/`);
        const file = {
            original_name: req.file.originalname,
            current_name: req.file.filename,
            type: req.file.mimetype,
            path: `${req.protocol}://${req.get("host")}/${req.file.path}`,
            size: req.file.size,
        };
        return fileModel.create(file)
    },

    get: async (pageNumber, limit) => {
        const skip = limit * pageNumber - limit
        return fileModel.find().limit(limit).skip(skip)
    },

    getById: async (id) => {
        return fileModel.findById(id)
    },

    updateOne: async (id, data) => {
        return fileModel.findByIdAndUpdate(id, data, { new: true })
    },

    deleteOne: async (id) => {
        return fileModel.deleteOne({ _id: id })
    }
}

export default fileServices