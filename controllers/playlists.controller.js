import { searchUsername } from "../services/auth.service.js";
import { searchPlaylists } from "../services/playlist.service.js";

export const getPlaylists = async (request, response) => {
  try {
    const userId = request.user.userId;
    const playlists = await searchPlaylists(userId);
    response.status(200).json({ playlists });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error searching playlists" });
  }
};
