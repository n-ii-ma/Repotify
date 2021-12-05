import { configureStore } from "@reduxjs/toolkit";
import topTracksReducer from "../features/tracks/topTracksSlice";

const store = configureStore({
  reducer: {
    topTracks: topTracksReducer,
  },
});

export default store;
