import express from "express";
import cors from "cors";
import tracksRoutes from "./routes/tracks.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", tracksRoutes);

export default app;
