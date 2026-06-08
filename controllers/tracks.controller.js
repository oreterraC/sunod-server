import { searchTopTracks, searchTracks } from "../services/track.service.js";

export const getTopTracks = async (request, response) => {
  try {
    const tracks = await searchTopTracks();
    response.status(200).json(tracks);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error searching top tracks" });
  }
};

export const getTracks = async (request, response) => {
  try {
    const query = request.query.q;
    if (!query) {
      return response.status(400).json({
        message: "Query parameter q is required",
      });
    }
    const tracks = await searchTracks(query);
    response.status(200).json(tracks);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Error searching tracks",
    });
  }
};
