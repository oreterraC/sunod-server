import { urlencoded } from "express";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import api from "./api.js";
import User from "../models/User.js";

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

// Register user
export const signup = async (email, password) => {
  const existingUser = await User.findOne({ where: email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    passwordHash,
  });

  return user;
};

// User login
export const signin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) throw new Error("Invalid credentials");
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
