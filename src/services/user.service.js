import mongoose from "mongoose";
import streamModel from "../models/stream.js";
import userModel from "../models/user.js";
import bcrypt from "bcrypt";

export const userService = {
  add: async (data) => {
    const { email } = data;
    const emailExist = await userModel.find({ email });
    if (emailExist.length > 0) {
      return false;
    } else {
      const { password } = data;
      const hashpassword = await bcrypt.hash(password, 10);
      data.password = hashpassword;
      const user = await userModel.create(data);
      return user;
    }
  },

  userData: async (id) => {
    return await userModel.findById(id);
  },

  get: async (pageNumber, limit) => {
    const skip = limit * pageNumber - limit;
    return await userModel.find().limit(limit).skip(skip);
  },

  login: async (data) => {
    return userModel.findOne({ email: data.email });
  },

  getByID: async (data) => {
    return userModel.findById(data);
  },

  getByIdAndUpdate: async (id, data) => {
    return userModel.findByIdAndUpdate(id, data, { new: true });
  },

  deleteOne: async (id) => {
    return userModel.deleteOne({ _id: id });
  },

  delete: async () => {
    return userModel.deleteMany();
  },

  getUserStreams: async (id) => {
    return streamModel.aggregate([
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },

  getStreamByUserIdAndStreamId: async (user_id, stream_id) => {
    return streamModel.find({ user_id, stream_id });
  },

  deleteStreamByUserIdAndStreamId: async (user_id, stream_id) => {
    return streamModel.deleteOne({ user_id, stream_id });
  },
};
