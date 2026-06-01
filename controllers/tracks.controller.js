import {
  searchTopTracks,
  searchTracks,
  searchGenres,
  searchTracksByGenre,
  signup,
  signin,
} from "../services/deezer.service.js";

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

export const register = async (request, response) => {
  try {
    const user = await signup(request.body.email, request.body.password);
    response.status(201).json(user);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (request, response) => {
  try {
    const token = await signin(request.body.email, request.body.password);
    response.json({ token });
  } catch (error) {
    response.status(401).json({
      message: error.message,
    });
  }
};
