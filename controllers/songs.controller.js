import { searchTracks } from "../services/deezer.service.js";

export const getSongs = async (request, response) => {
  try {
    const query = request.query.q;
    if (!query) {
      return response.status(400).json({
        message: "Query parameter q is required",
      });
    }
    const songs = await searchTracks(query);
    response.status(200).json(songs);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Error searching songs",
    });
  }
};
