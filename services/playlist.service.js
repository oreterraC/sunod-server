import Playlist from "../models/Playlist.js";

export const searchPlaylists = async (userId) => {
  const playlists = await Playlist.findAll({
    where: { userId },
    attributes: ["name", "createdAt"],
  });
  return playlists;
};
