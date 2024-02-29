import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import cookieParser from "cookie-parser";
import path from "path";

mongoose.connect(process.env.MONGO_URL as string);

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(7000, () => {
  console.log("listening on port 7000");
});
