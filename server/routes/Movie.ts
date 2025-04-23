import express, { Request, Response, Router } from "express";
import Movie from "../models/Movie";

const router: Router = express.Router();

// CREATE movie
router.post("/", async (req: Request, res: Response) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: err });
  }
});

// ✅ Kinolarni olish va filterlash
router.get("/", async (req: Request, res: Response) => {
  try {
    const { limit = 10, genre, type, name } = req.query;

    const parsedLimit = parseInt(limit as string);
    let query: any = {};

    if (genre) {
      query.genre = genre;
    }

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    let sortOptions = {};
    if (type === "latest") {
      sortOptions = { createdAt: -1 };
    }

    const movies = await Movie.find(query).sort(sortOptions).limit(parsedLimit);

    res.status(200).json(movies);
  } catch (error) {
    console.error("Kinolarni olishda xatolik:", error);
    res.status(500).json({ message: "Kinolarni olishda xatolik yuz berdi" });
  }
});

// READ single movie
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ message: "Movie topilmadi" });
      return;
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err });
  }
});

// UPDATE movie
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err });
  }
});

// DELETE movie
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Movie o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err });
  }
});

// LIKE movie
router.put("/like/:id", async (req: Request, res: Response) => {
  const userId = req.body.userId;

  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ message: "Movie topilmadi" });
      return;
    }

    if (!movie.likes.includes(userId)) {
      movie.likes.push(userId);
      await movie.save();
      res.status(200).json({ message: "Like qo‘shildi" });
    } else {
      res.status(400).json({ message: "Siz allaqachon like bosgansiz" });
    }
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err });
  }
});

// UNLIKE movie
router.put("/unlike/:id", async (req: Request, res: Response) => {
  const userId = req.body.userId;
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ message: "Movie topilmadi" });
      return;
    }

    if (movie.likes.includes(userId)) {
      movie.likes = movie.likes.filter((id: string) => id !== userId);
      await movie.save();
      res.status(200).json({ message: "Like olib tashlandi" });
    } else {
      res.status(400).json({ message: "Siz hali like bosmagansiz" });
    }
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err });
  }
});


router.put("/review/:id", async (req: Request, res: Response) => {
  const reviewData = req.body;

  try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
          res.status(404).json({ message: "Movie topilmadi" });
          return
      }

      const alreadyReviewed = movie.reviews.some(
          (r: any) => r.name === reviewData.name
      );
      if (alreadyReviewed) {
          res.status(400).json({ message: "Siz allaqachon review bergansiz" });
          return
      }

      // faqat reviewsni yangilaymiz
      await Movie.updateOne(
          { _id: req.params.id },
          { $push: { reviews: reviewData } }
      );

      res.status(200).json({ message: "Review qo‘shildi" });
  } catch (err) {
      res.status(500).json({ message: "Xatolik", error: err });
  }
});


export default router;
