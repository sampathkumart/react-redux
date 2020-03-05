import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "kaththi", singer: "vijay" },
    { title: "ayan", singer: "surya" },
    { title: "vip", singer: "dhanush" },
    { title: "ayan", singer: "surya" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.google;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
