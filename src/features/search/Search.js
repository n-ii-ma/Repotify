import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectArtistName } from "./searchSlice";
import { searchArtist } from "./searchSlice";
import { setArtist } from "./searchSlice";
import { selectArtistID } from "../search/searchSlice";
import { getTopTracks } from "../tracks/topTracksSlice";

const Search = () => {
  const dispatch = useDispatch();
  const input = useSelector(selectArtistName);
  const artistID = useSelector(selectArtistID);

  // Endpoints for Search and Get Artist's Top Tracks
  const searchEndpoint = `https://api.spotify.com/v1/search?q=${input}&type=artist&market=US&limit=10`;
  const topTracksEndpoint = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US`;

  // If Artist ID is True and Returned from the Server, then Dispatch and Get the Top Tracks
  useEffect(() => {
    if (artistID) dispatch(getTopTracks(topTracksEndpoint));
  }, [dispatch, topTracksEndpoint, artistID]);

  // Search for the Artist on Submit and Show Artist's Top Tracks
  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;

    dispatch(searchArtist(searchEndpoint));
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="search" className="search-label">
        Search Artist
      </label>
      <input
        type="search"
        value={input}
        onChange={(e) => dispatch(setArtist(e.target.value))}
        className="search-input"
        placeholder="E.g.: Taylor Swift"
        required
      />
      <br />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default Search;
