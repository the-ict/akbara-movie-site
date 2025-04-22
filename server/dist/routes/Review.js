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
const Reviews_1 = __importDefault(require("../models/Reviews"));
const router = express_1.default.Router();
// ✅ Yangi review qo‘shish
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, country, message, rating } = req.body;
        const review = yield Reviews_1.default.create({
            name,
            country,
            message,
            rating,
        });
        res.status(201).json(review);
    }
    catch (error) {
        res.status(500).json({ error: "Review qo'shishda xatolik yuz berdi" });
    }
}));
// ✅ Barcha review-larni olish
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield Reviews_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ error: "Review-larni olishda xatolik yuz berdi" });
    }
}));
// ✅ ID orqali review olish
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield Reviews_1.default.findById(id);
        if (!review) {
            res.status(404).json({ error: "Review topilmadi" });
            return;
        }
        res.status(200).json(review);
    }
    catch (error) {
        res.status(500).json({ error: "Reviewni olishda xatolik yuz berdi" });
    }
}));
// ✅ Reviewni yangilash
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, country, message } = req.body;
        const review = yield Reviews_1.default.findByIdAndUpdate(id, { name, country, message }, { new: true, runValidators: true });
        if (!review) {
            res.status(404).json({ error: "Review topilmadi" });
            return;
        }
        res.status(200).json(review);
    }
    catch (error) {
        res.status(500).json({ error: "Reviewni yangilashda xatolik yuz berdi" });
    }
}));
// ✅ Reviewni o‘chirish
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield Reviews_1.default.findByIdAndDelete(id);
        if (!review) {
            res.status(404).json({ error: "Review topilmadi" });
            return;
        }
        res.status(200).json({ message: "Review o‘chirildi" });
    }
    catch (error) {
        res.status(500).json({ error: "Reviewni o‘chirishda xatolik yuz berdi" });
    }
}));
exports.default = router;
