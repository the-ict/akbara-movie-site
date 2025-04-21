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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone, lastname } = req.body;
    if (req.body.name.trim() === "")
        return;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield User_1.default.create({
            name,
            email,
            password: hashedPassword,
            lastname,
            phone,
        });
        res.status(200).json({
            message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi!",
            user: newUser,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Serverda xatolik mavjud!", error });
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "Bunday foydalanuvchi topilmadi!" });
            return;
        }
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(401).json({ message: "Parol noto'g'ri!" });
            return;
        }
        res.status(200).json({
            message: "Muvaffaqiyatli tizimga kirildi!",
            user,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Serverda xatolik mavjud!" });
    }
}));
exports.default = router;
