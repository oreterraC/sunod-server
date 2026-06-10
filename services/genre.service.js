import api from "./api.js";
import { mapTracks } from "./api.js";

// Search for all genres
export const searchGenres = async () => {
  const response = await api.get("/genre");

  let genres = response.data.data;

  return genres
    .filter((genre) => genre.id != 0)
    .map((genre) => ({
      id: genre.id,
      name: genre.name,
      picture: genre.picture_small,
    }));
};

// Search for tracks by genre id
export const searchTracksByGenre = async (id) => {
  const response = await api.get(`/chart/${id}/tracks`);

  let tracks = response.data.data;

  return mapTracks(tracks);
};
