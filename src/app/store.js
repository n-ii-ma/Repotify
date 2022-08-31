import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import topTracksReducer from "../features/tracks/topTracksSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    topTracks: topTracksReducer,
  },
  devTools: process.env.NODE_ENV === 'development' && true,
});

export default store;
