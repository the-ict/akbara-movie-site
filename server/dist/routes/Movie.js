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
        const { limit = 10, genre, type, name } = req.query;
        const parsedLimit = parseInt(limit);
        let query = {};
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
        const movies = yield Movie_1.default.find(query)
            .sort(sortOptions)
            .limit(parsedLimit);
        res.status(200).json(movies);
    }
    catch (error) {
        console.error("Kinolarni olishda xatolik:", error);
        res.status(500).json({ message: "Kinolarni olishda xatolik yuz berdi" });
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
        const updated = yield Movie_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }
        if (!movie.likes.includes(userId)) {
            movie.likes.push(userId);
            yield movie.save();
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
// ADD REVIEW
router.put("/review/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewId = req.body.reviewId;
    try {
        const movie = yield Movie_1.default.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: "Movie topilmadi" });
            return;
        }
        if (!movie.reviews.includes(reviewId)) {
            movie.reviews.push(reviewId);
            yield movie.save();
            res.status(200).json({ message: "Review qo‘shildi" });
        }
        else {
            res.status(400).json({ message: "Siz allaqachon review bergansiz" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Xatolik", error: err });
    }
}));
exports.default = router;
