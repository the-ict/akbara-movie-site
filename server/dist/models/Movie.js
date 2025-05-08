"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ReviewSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true },
});
const MovieSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    created_time: { type: String, required: true },
    language: [{ type: String, required: true }],
    country: { type: String, required: true },
    Genres: [{ type: String, required: true }],
    likes: [{ type: String, required: true }],
    reviews: { type: [ReviewSchema], default: [] },
    thumbnail: { type: String, required: true },
    video_link: { type: String, required: true },
    cart_img: { type: String, required: true },
}, { timestamps: true });
const MovieModel = mongoose_1.default.model("Movie", MovieSchema);
exports.default = MovieModel;
