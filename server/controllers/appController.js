import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config.js";

export async function register(req, res) {
  try {
    const { email, password, username } = req.body;

    const existEmail = await UserModel.findOne({ email });

    if (existEmail) {
      return res.status(400).json({ error: "Please use a unique email" });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new UserModel({
        email,
        password: hashedPassword,
        username,
        role: "USER",
      });

      await user.save();

      return res.status(201).json({ msg: "User registered successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res.status(400).json({ error: "Password does not match" });
    }

    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      ENV.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      email: user.email,
      name: user.username,
      role: user.role,
      token,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
