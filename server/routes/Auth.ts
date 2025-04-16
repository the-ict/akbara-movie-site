import express, { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";

const router: Router = express.Router();

router.post("/register",async (req: Request, res: Response) => {
    const { name, email, password, phone, terms_agreed, lastname } = req.body;

    if(req.body.name.trim() === "") return;
    
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        lastname,
        phone,
        terms_agreed
      });

      res.status(200).json({
        message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi!",
        user: newUser,
      });
    } catch (error) {
      res.status(500).json({ message: "Serverda xatolik mavjud!", error});
    }
  }
);



router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });

      if (!user) {
        res.status(404).json({ message: "Bunday foydalanuvchi topilmadi!" });
        return;
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
          res.status(401).json({ message: "Parol noto'g'ri!" });
          return;
      }

      res.status(200).json({
          message: "Muvaffaqiyatli tizimga kirildi!",
          user,
      });
  } catch (error) {
      res.status(500).json({ message: "Serverda xatolik mavjud!" });
  }
});





export default router;
