import express from "express";
import cors from "cors";
import songsRoutes from "./routes/songs.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/songs", songsRoutes);

export default app;
