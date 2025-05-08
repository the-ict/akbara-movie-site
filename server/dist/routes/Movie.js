"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Movie_1 = __importDefault(require("../models/Movie"));
const router = express_1.default.Router();
// CREATE movie
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMovie = yield Movie_1.default.create(req.body);
        res.status(201).json(newMovie);
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik yuz berdi", error: err });
    }
}));
// ✅ Kinolarni olish va filterlash
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, type, name } = req.query;
        const parsedLimit = parseInt(limit);
        let query = {};
        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        let sortOptions = {};
        if (type === "latest") {
            sortOptions = { createdAt: -1 };
        }
        const movies = yield Movie_1.default.find(query).sort(sortOptions).limit(parsedLimit);
        res.status(200).json(movies);
    }
    catch (error) {
        console.error("Kinolarni olishda xatolik:", error);
        res.status(500).json({ message: "Kinolarni olishda xatolik yuz berdi" });
    }
}));
// ✅ Genres, Country va Year bo‘yicha kinolarni olish
router.get("/categories", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { genre, country, year, limit = 10 } = req.query;
        const parsedLimit = parseInt(limit);
        let query = {};
        if (genre) {
            query.Genres = { $in: [genre] };
        }
        if (country) {
            query.country = country;
        }
        if (year) {
            query.created_time = { $regex: `^${year}`, $options: "i" };
        }
        const movies = yield Movie_1.default.find(query).limit(parsedLimit);
        res.status(200).json(movies);
    }
    catch (error) {
        console.error("Genres, Country va Year bo‘yicha kinolarni olishda xatolik:", error);
        res.status(500).json({
            message: "Genres, Country va Year bo‘yicha kinolarni olishda xatolik yuz berdi",
        });
    }
}));
// READ single movie
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield Movie_1.default.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }
        res.status(200).json(movie);
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
// UPDATE movie
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield Movie_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(updated);
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
// DELETE movie
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Movie_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Movie o‘chirildi" });
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
// LIKE movie
router.put("/like/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    try {
        const movie = yield Movie_1.default.findById(req.params.id);
        console.log(movie, "movie topildi like");
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }
        if (!movie.likes.includes(userId)) {
            console.log(movie, "like bosilmoqchi like");
            movie.likes.push(userId);
            yield movie.save();
            console.log(movie, "yangilangan movie");
            res.status(200).json({ message: "Like qo‘shildi" });
        }
        else {
            res.status(400).json({ message: "Siz allaqachon like bosgansiz" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
// UNLIKE movie
router.put("/unlike/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    try {
        const movie = yield Movie_1.default.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }
        if (movie.likes.includes(userId)) {
            movie.likes = movie.likes.filter((id) => id !== userId);
            yield movie.save();
            res.status(200).json({ message: "Like olib tashlandi" });
        }
        else {
            res.status(400).json({ message: "Siz hali like bosmagansiz" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
router.put("/review/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewData = req.body;
    try {
        const movie = yield Movie_1.default.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }
        const alreadyReviewed = movie.reviews.some((r) => r.name === reviewData.name);
        if (alreadyReviewed) {
            res.status(400).json({ message: "Siz allaqachon review bergansiz" });
            return;
        }
        // faqat reviewsni yangilaymiz
        yield Movie_1.default.updateOne({ _id: req.params.id }, { $push: { reviews: reviewData } });
        res.status(200).json({ message: "Review qo‘shildi" });
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
router.delete("/review/:movieId/:reviewId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieId, reviewId } = req.params;
    try {
        const movie = yield Movie_1.default.findById(movieId);
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
        }
        const reviewExists = movie === null || movie === void 0 ? void 0 : movie.reviews.some((review) => review._id.toString() === reviewId);
        if (!reviewExists) {
            res.status(404).json({ message: "Review topilmadi" });
        }
        // Reviewni olib tashlaymiz
        yield Movie_1.default.updateOne({ _id: movieId }, { $pull: { reviews: { _id: reviewId } } });
        res.status(200).json({ message: "Review o‘chirildi" });
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
exports.default = router;
