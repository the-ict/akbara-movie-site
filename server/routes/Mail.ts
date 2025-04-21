import express, {Router, Request, Response } from "express";
import { Resend } from "resend";

const router: Router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY)

router.post("/", async(req: Request, res: Response) => {
  try {
    const { email, message } = req.body;
    await resend.emails.send({
        from: "Acme davlatjon",
        to: "dvltinv@gmail.com",
        subject: "Noname",
        html: `<p>${message} -- from ${email}</p>`
    })
  } catch (error) {
    res.status(500).json({
      message: "Serverda xatolik mavjud",
      error,
    });
  }
});

export default router;
