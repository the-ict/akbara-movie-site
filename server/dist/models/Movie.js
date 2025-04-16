"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RatingSchema = new mongoose_1.default.Schema({
    link: { type: String, required: true },
    by_title: { type: String, required: true },
    rating: { type: Number, required: true },
});
const DirectorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    about_link: { type: String, required: true },
});
const MusicSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    about_link: { type: String, required: true },
});
const MovieSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    created_time: { type: String, required: true },
    language: [{ type: String, required: true }],
    ratings: [RatingSchema],
    Genres: [{ type: String, required: true }],
    Director: { DirectorSchema },
    Music: { MusicSchema },
    likes: [{ type: String, required: true }],
    reviews: [{ type: String, reuqired: true }],
    thumbnail: { type: String, required: true },
    video_link: { type: String, required: true },
    cart_img: { type: String, required: true },
}, { timestamps: true });
const MovieModel = mongoose_1.default.model("Movie", MovieSchema);
exports.default = MovieModel;
