import express, { Request, Response, Router } from "express";
import UserModel from "../models/User"; // pathni moslashtiring

const router: Router = express.Router();

// UPDATE USER
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, 
      },
      { new: true } 
    );

    if (!updatedUser) {
        res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user", error: err });
  }
});

export default router;
