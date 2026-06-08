import express from "express";
import {
  getGenres,
  getTracksByGenre,
} from "../controllers/genres.controller.js";

const router = new express.Router();

router.get("/", getGenres).get("/:id", getTracksByGenre);

export default router;
