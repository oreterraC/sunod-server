import axios from "axios";
import { urlencoded } from "express";
import api from "./api.js";

// Search for tracks
export const searchTracks = async (query) => {
  const response = await api.get("/search", {
    params: {
      q: query,
    },
  });

  let tracks = response.data.data;

  return tracks.map((track) => ({
    id: track.id,
    title: track.title_short,
    duration: track.duration,
    picture: track.artist.picture_small,
    album: track.album.title,
    cover: track.album.cover_xl,
  }));
};

// Search for genres
export const searchGenres = async () => {
  const response = await api.get("https://api.deezer.com/genre");

  let genres = response.data.data;

  return genres.map((genre) => ({
    id: genre.id,
    name: genre.name,
    picture: genre.picture_small,
  }));
};
