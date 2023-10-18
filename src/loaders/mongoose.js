import mongoose from "mongoose";
// import config from "../config/index.js";

export default async function mongooseLoader() {
	const connection = mongoose.connection;
	connection.once("connected", () => console.log("Database Connected ~"));
	connection.on("error", (error) => console.log("Database Error: ", error));

	mongoose.connect("mongodb://127.0.0.1:27017/iptv", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return connection.db;
}
