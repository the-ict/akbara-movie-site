import express, {Router, Request, Response } from "express";
import { Resend } from "resend";
import dotenv from "dotenv"

dotenv.config()

const router: Router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY)

router.post("/", async(req: Request, res: Response) => {
  try {
    const { email, message } = req.body;
    await resend.emails.send({
      from: "Acme avlatjon <davlatjonsoqqamode@gmail.com>",
      to: "dvltinv@gmail.com", 
      subject: "Noname",
      html: `<p>${message} -- from ${email}</p>`
    });

    res.status(200).json({
      message: "Xabar jo'natildi",
      status: 200
    })
  } catch (error) {
    res.status(500).json({
      message: "Serverda xatolik mavjud",
      error,
    });
  }
});

export default router;
