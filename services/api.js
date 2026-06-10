import axios from "axios";

export const mapTracks = (tracks) => {
  return tracks.map((track) => ({
    id: track.id,
    title: track.title_short,
    duration: track.duration,
    picture: track.artist.picture_small,
    album: track.album.title,
    cover: track.album.cover_xl,
  }));
};

export default axios.create({
  baseURL: "https://api.deezer.com",
});
