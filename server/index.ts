import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

// Route fayllarini import qilish
import authRoutes from "./routes/Auth";
import movieRoutes from "./routes/Movie";
import reviewRoutes from "./routes/Review";

dotenv.config();

const port = process.env.PORT || 5000;
const app: Express = express();

// MongoDB bilan ulanish
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB ishga tushdi...");
  } catch (error) {
    console.log("Mongodbda xatolik mavjud:", error);
  }
};

// Middlewares
app.use(express.json()); // JSON request'lar uchun
app.use(cors())

// Route'larni ulash
app.use("/api/auth", authRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/review", reviewRoutes);

app.listen(port, () => {
  console.log(`Server ishga tushdi ${port}`);
  connect();
});
