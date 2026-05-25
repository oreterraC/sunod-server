import express from "express";
import { getTracks, getGenres } from "../controllers/tracks.controller.js";

const router = express.Router();
router.get("/search", getTracks).get("/genre", getGenres);

export default router;
