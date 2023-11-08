import express from "express";
import cors from "cors";
import userRoute from "../routes/user.route.js";
import genreRouter from "../routes/genre.route.js";
import fileRouter from "../routes/file.route.js";
import seriesRouter from "../routes/series.route.js";
import seasonRouter from "../routes/season.route.js";
import episodeRouter from "../routes/episode.route.js";
import streamRouter from "../routes/stream.route.js";
import genreSeriesRouter from "../routes/genre.series.route.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import helmet from "helmet";
// import { authenticate } from "../middleware/index.js";
// import { protectedRouter, unProtectedRouter } from "../routes/index.js";

export default async function expressLoader({ app }) {
  app.use(cors());
  // app.use(helmet());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/public", express.static("public"));

  //swagger
  const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "IPTV",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        jwt_auth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
          description:
            'Add your JWT token with the "Bearer " prefix (e.g., "Bearer your-token")',
        },
      },
    },
    servers: [
      {
        url: process.env.BASE_URL,
        description: "Development server",
      },
    ],
  };
  const options = {
    swaggerDefinition,
    apis: ["./src/utils/swagger/user.yaml"],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  //Route Test
  app.get("/", (req, res) => res.json("Server Running"));

  // app.use("/", unProtectedRouter);
  // app.use("/", authenticate, protectedRouter);
  app.use("/user", userRoute);
  app.use("/genre", genreRouter);
  app.use("/file", fileRouter);
  app.use("/series", seriesRouter);
  app.use("/season", seasonRouter);
  app.use("/episode", episodeRouter);
  app.use("/stream", streamRouter);
  app.use("/genre-series", genreSeriesRouter);
}
