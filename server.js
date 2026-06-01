import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./configuration/database.js";
import "./models/User.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

try {
  await sequelize.authenticate();
  console.log("Database connected");

  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Servidor en https://localhost:${PORT}`);
  });
} catch (error) {
  console.error(error);
}
