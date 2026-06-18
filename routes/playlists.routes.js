import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { getPlaylists } from "../controllers/playlists.controller.js";

const router = new express.Router();

router.get("/", authenticate, getPlaylists);

export default router;
