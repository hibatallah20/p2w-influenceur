import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.patch("/complete-profile/:id", async (req, res) => {
    const { id } = req.params;
    const { bio, interests, instagram } = req.body;

    const allowedInterests = ["café", "bar", "restaurant"];
    if (interests && !allowedInterests.includes(interests)) {
        return res.status(400).json({ message: "Invalid interest value" });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.bio = bio || user.bio;
        user.interests = interests || user.interests;
        user.instagram = instagram || user.instagram;

        await user.save();

        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: user._id,
                bio: user.bio,
                interests: user.interests,
                instagram: user.instagram
            }
        });
    } catch (error) {
        console.error("Erreur dans complete-profile :", error);
        res.status(500).json({ message: "Error server" });
    }
});

export default router;
