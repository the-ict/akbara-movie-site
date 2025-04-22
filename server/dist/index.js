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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// Route fayllarini import qilish
const Auth_1 = __importDefault(require("./routes/Auth"));
const Movie_1 = __importDefault(require("./routes/Movie"));
const Review_1 = __importDefault(require("./routes/Review"));
const Mail_1 = __importDefault(require("./routes/Mail"));
const User_1 = __importDefault(require("./routes/User"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
// MongoDB bilan ulanish
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URL);
        console.log("MongoDB ishga tushdi...");
    }
    catch (error) {
        console.log("Mongodbda xatolik mavjud:", error);
    }
});
// Middlewares
app.use(express_1.default.json()); // JSON request'lar uchun
app.use((0, cors_1.default)());
// Route'larni ulash
app.use("/api/auth", Auth_1.default);
app.use("/api/movie", Movie_1.default);
app.use("/api/review", Review_1.default);
app.use("/api/mail", Mail_1.default);
app.use("/api/user", User_1.default);
app.listen(port, () => {
    console.log(`Server ishga tushdi ${port}`);
    connect();
});
