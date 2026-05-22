import express from "express";
import { getSongs } from "../controllers/songs.controller.js";

const router = express.Router();
router.get("/search", getSongs);

export default router;
