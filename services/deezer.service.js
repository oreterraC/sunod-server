import axios from "axios";
import { urlencoded } from "express";
import api from "./api.js";

const mapTracks = (tracks) => {
  return tracks.map((track) => ({
    id: track.id,
    title: track.title_short,
    duration: track.duration,
    picture: track.artist.picture_small,
    album: track.album.title,
    cover: track.album.cover_xl,
  }));
};

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
