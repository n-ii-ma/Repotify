import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk to Handle the API Response
export const getTopTracks = createAsyncThunk(
  "topTracks/getTopTracks",
  async (apiAddress) => {
    const response = await fetch(apiAddress);

    if (!response.ok) throw new Error("Request Failed!");

    const data = await response.json();
    return data;
  }
);

const topTracksSlice = createSlice({
  name: "topTracks",
  initialState: {
    artistTopTracks: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopTracks.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getTopTracks.fulfilled, (state, action) => {
        state.artistTopTracks = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getTopTracks.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

// Selectors
export const selectArtistTopTracks = (state) => state.topTracks.artistTopTracks;
export const selectTopTracksIsLoading = (state) => state.topTracks.isLoading;
export const selectTopTracksHasError = (state) => state.topTracks.hasError;

// Reducer
export default topTracksSlice.reducer;
