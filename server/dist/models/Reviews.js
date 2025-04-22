"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ReviewsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true }
}, { timestamps: true });
const ReviewsModel = mongoose_1.default.model("Review", ReviewsSchema);
exports.default = ReviewsModel;
