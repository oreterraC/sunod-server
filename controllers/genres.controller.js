import {
  searchGenres,
  searchTracksByGenre,
} from "../services/genre.service.js";

export const getGenres = async (request, response) => {
  try {
    const genres = await searchGenres();
    response.status(200).json(genres);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Error searching genres",
    });
  }
};

export const getTracksByGenre = async (request, response) => {
  try {
    const id = request.params.id;
    const tracks = await searchTracksByGenre(id);
    response.status(200).json(tracks);
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Error searching tracks by genre",
    });
  }
};
