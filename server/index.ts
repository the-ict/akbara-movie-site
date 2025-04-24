import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"


import authRoutes from "./routes/Auth";
import movieRoutes from "./routes/Movie";
import mailRoutes from "./routes/Mail"
import userRoutes from "./routes/User"

dotenv.config();

const port = process.env.PORT || 5000;
const app: Express = express();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB ishga tushdi...");
  } catch (error) {
    console.log("Mongodbda xatolik mavjud:", error);
  }
};


app.use(express.json()); 
app.use(cors())

// Route'larni ulash
app.use("/api/auth", authRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/mail", mailRoutes);
app.use("/api/user", userRoutes)

app.listen(port, () => {
  console.log(`Server ishga tushdi ${port}`);
  connect();
});
