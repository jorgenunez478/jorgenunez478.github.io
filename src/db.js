import mongoose from "mongoose";
import { MONGODB_URI, TOKEN_SECRET } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
