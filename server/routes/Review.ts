import express, { Request, Response, Router } from "express";
import ReviewsModel from "../models/Reviews";

const router: Router = express.Router();

// ✅ Yangi review qo‘shish
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, country, message, rating } = req.body;
    const review = await ReviewsModel.create({
      name,
      country,
      message,
      rating,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: "Review qo'shishda xatolik yuz berdi" });
  }
});

// ✅ Barcha review-larni olish
router.get("/", async (_req: Request, res: Response) => {
  try {
    const reviews = await ReviewsModel.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Review-larni olishda xatolik yuz berdi" });
  }
});

// ✅ ID orqali review olish
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await ReviewsModel.findById(id);
    if (!review) {
      res.status(404).json({ error: "Review topilmadi" });
      return;
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Reviewni olishda xatolik yuz berdi" });
  }
});

// ✅ Reviewni yangilash
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, country, message } = req.body;
    const review = await ReviewsModel.findByIdAndUpdate(
      id,
      { name, country, message },
      { new: true, runValidators: true }
    );
    if (!review) {
      res.status(404).json({ error: "Review topilmadi" });
      return;
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: "Reviewni yangilashda xatolik yuz berdi" });
  }
});

// ✅ Reviewni o‘chirish
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await ReviewsModel.findByIdAndDelete(id);
    if (!review) {
      res.status(404).json({ error: "Review topilmadi" });
      return;
    }
    res.status(200).json({ message: "Review o‘chirildi" });
  } catch (error) {
    res.status(500).json({ error: "Reviewni o‘chirishda xatolik yuz berdi" });
  }
});

export default router;
