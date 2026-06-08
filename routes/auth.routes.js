import express from "express";
import { signUp, signIn } from "../controllers/auth.controller.js";

const router = new express.Router();

router.post("/signIn", signIn).post("/signUp", signUp);

export default router;
