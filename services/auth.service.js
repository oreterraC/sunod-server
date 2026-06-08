import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import api from "./api.js";
import User from "../models/User.js";

// Register user
export const register = async (email, password) => {
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    passwordHash,
  });

  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// User login
export const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) throw new Error("Invalid credentials");
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
