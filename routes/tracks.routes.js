import express from "express";
import {
  getTopTracks,
  getTracks,
  getGenres,
  getTracksByGenre,
} from "../controllers/tracks.controller.js";

const router = express.Router();

router
  .get("/top", getTopTracks)
  .get("/search", getTracks)
  .get("/genre", getGenres)
  .get("/genre/:id", getTracksByGenre);

export default router;
