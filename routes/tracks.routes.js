import express from "express";
import {
  getTopTracks,
  getTracks,
  getGenres,
} from "../controllers/tracks.controller.js";

const router = express.Router();
router
  .get("/top", getTopTracks)
  .get("/search", getTracks)
  .get("/genre", getGenres);

export default router;
