import express from "express";
import cors from "cors";
import trackRoutes from "./routes/tracks.routes.js";
import genreRoutes from "./routes/genres.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", trackRoutes).use("/genre", genreRoutes).use("/auth", authRoutes);

export default app;
