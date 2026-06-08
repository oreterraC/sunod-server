import express from "express";
import { getTopTracks, getTracks } from "../controllers/tracks.controller.js";

const router = express.Router();

router.get("/top", getTopTracks).get("/search", getTracks);

export default router;
