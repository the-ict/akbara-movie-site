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
        const { limit = 10, genre, type } = req.query;  // querydan limit, genre, type olish
        console.log(type)

        // limitni son sifatida olish
        const parsedLimit = parseInt(limit as string);

        // Filter uchun queryni tayyorlash
        let query: any = {};  // bo'sh query ob'ekti

        // Agar genre berilgan bo'lsa, so'rovga qo'shamiz
        if (genre) {
            query.genre = genre;
        }

        // Agar type 'latest' bo'lsa, so'rovga createdAt bo'yicha sort qo'shamiz
        if (type === "latest") {
            query = { ...query, createdAt: -1 };  // Yangi kinolarni olish uchun
        }

        // Kinolarni so'rovga mos keladigan tarzda olish
        const movies = await Movie.find(query).limit(parsedLimit);  // Limitni qo'llash

        res.status(200).json(movies);  // Kinolarni qaytarish
    } catch (error) {
        console.error("Kinolarni olishda xatolik:", error);
        res.status(500).json({ message: "Kinolarni olishda xatolik yuz berdi" });
    }
});
// READ single movie
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie){
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
        const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

// ADD REVIEW
router.put("/review/:id", async (req: Request, res: Response) => {
    const reviewId = req.body.reviewId;
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }

        if (!movie.reviews.includes(reviewId)) {
            movie.reviews.push(reviewId);
            await movie.save();
            res.status(200).json({ message: "Review qo‘shildi" });
        } else {
            res.status(400).json({ message: "Siz allaqachon review bergansiz" });
        }
    } catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
});

export default router;