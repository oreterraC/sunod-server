import { DataTypes } from "sequelize";
import sequelize from "../configuration/database.js";

const Playlist = sequelize.define("Playlist", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
