import { urlencoded } from "express";
import axios from "axios";
import api from "./api.js";
import { mapTracks } from "./api.js";

// Search for top tracks
export const searchTopTracks = async () => {
  const response = await api.get("/chart/0/tracks");

  let tracks = response.data.data;

  return mapTracks(tracks);
};

// Search for tracks by word
export const searchTracks = async (query) => {
  const response = await api.get("/search", {
    params: {
      q: query,
    },
  });

  let tracks = response.data.data;

  return mapTracks(tracks);
};
