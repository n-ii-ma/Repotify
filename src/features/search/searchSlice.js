import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAccessToken from "../../utils/accessToken";

// Async Thunk to Handle the API Response which Searches for an Artist
export const searchArtist = createAsyncThunk(
  "search/searchArtist",
  async (apiAddress) => {
    const accessToken = await getAccessToken();
    const response = await fetch(apiAddress, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Request Failed!");

    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    artistName: "",
    artistID: "",
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setArtist: (state, action) => {
      state.artistName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchArtist.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(searchArtist.fulfilled, (state, action) => {
        state.artistID = action.payload.artists.items[0].id;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(searchArtist.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

// Selectors
export const selectArtistName = (state) => state.search.artistName;
export const selectArtistID = (state) => state.search.artistID;
/* export const selectArtistID = (state) =>
  state.search.searchArtist.artists.items[0].id; */

// Action
export const { setArtist } = searchSlice.actions;

// Reducer
export default searchSlice.reducer;
