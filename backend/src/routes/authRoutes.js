import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";



const router = express.Router();

const generateResetToken = () => crypto.randomBytes(32).toString("hex");

const sendEmail = async (to, message) => {
  console.log(`Email to ${to}: ${message}`);
};

const generateToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "15d" });
}

router.post("/register", async (req, res) => {
    try {
     const { firstname, lastname, username, email, phone, password } = req.body;
    
     if(!firstname || !lastname || !username || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields are required" });
     }


     if(password.length < 12){
        return res.status(400).json({ message: "Password should be at least 12 characters long" });
     }

     if(username.length < 3) {
        return res.status(400).json({ message: "Username should be at least 3 characters long "});
     }

     // check if user already exists
     const existingEmail = await User.findOne({ email });
     if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
     }

     const existingUsername = await User.findOne({ username });
     if (existingUsername) {
        return res.status(400).json({ message: "Username already exists" });
     }

     const user = new User({
            firstname,
            lastname,
            username,
            email,
            phone,
            password,
            profileImage: "",
            bio: "",
            interests: [],
            instagram: ""
     })

     await user.save();

     const token = generateToken(user._id);


     res.status(201).json({
        token,
        user: {
            id: user._id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            email: user.email,
            profileImage: user.profileImage
        },
     })
    }catch (error) {
        console.log("Error in register route", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password ) return res.status(400).json({ message: "All fields are required" });
        
        // check if user exists 
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message: "Invalid credentials" });

        // check if password is correct
        const isPasswordCorrect = await user.comparePassword(password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials"});

        // generate token

        const token = generateToken(user._id);


        res.status(201).json({
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            profileImage: user.profileImage
        },
     })
    } catch (error) {
        console.log("Error in login route", error);
        res.status(500).json({ message: "Internal server error" });

    }
});

router.post("/resetPassword", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) {
      // Réponse générique même si l'utilisateur n'existe pas
      return res.status(200).json({ message: "If user exists, a reset email was sent" });
    }

    const token = generateResetToken();
    user.resetToken = token;
    user.resetTokenExpires = Date.now() + 3600000; // 1 heure

    await user.save();

    // Simuler l'envoi d'email
    await sendEmail(user.email, `Here is your reset token: ${token}`);

    res.status(200).json({ message: "Reset token sent" });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post('/api/auth/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: "Token and new password are required" });
  }

  // Chercher l'utilisateur avec ce token dans ta DB
  const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired reset token" });
  }


  user.password = await hashPassword(newPassword); 
  user.resetToken = undefined;
  user.resetTokenExpires = undefined;

  await user.save();

  res.json({ message: "Password successfully reset" });
});

router.post("/confirmResetPassword", async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;

    if (!email || !token || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email, resetToken: token });

    if (!user || user.resetTokenExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = newPassword; 
    user.resetToken = null;
    user.resetTokenExpires = null;

    await user.save();

    res.status(200).json({ message: "Password has been successfully reset" });
  } catch (error) {
    console.error("Error in confirmResetPassword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});




export default router;