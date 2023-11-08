import { v2 as cloudinary } from "cloudinary";
export const env = {
  port: process.env.PORT || 2022,
  // nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET || "my_temporary_secret",
};
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// "mongodb://127.0.0.1:27017/boilerplate"
