import axios from "axios";
import { urlencoded } from "express";

// Search for tracks
export const searchTracks = async (query) => {
  const response = await axios.get("https://api.deezer.com/search", {
    params: {
      q: query,
    },
  });

  return response.data.data;
};
