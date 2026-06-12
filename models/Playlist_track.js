import { DataTypes } from "sequelize";
import sequelize from "../configuration/database.js";

const Playlist_track = sequelize.define("Playlist_track", {
  playlistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trackId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
