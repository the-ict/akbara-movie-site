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
const resend_1 = require("resend");
const router = express_1.default.Router();
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, message } = req.body;
        yield resend.emails.send({
            from: "Acme davlatjon",
            to: "dvltinv@gmail.com",
            subject: "Noname",
            html: `<p>${message} -- from ${email}</p>`
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Serverda xatolik mavjud",
            error,
        });
    }
}));
exports.default = router;
