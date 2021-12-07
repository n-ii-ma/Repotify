import { useState } from "react";
import { useDispatch } from "react-redux";
import Spotify from "../utils/Spotify";
import { getTopTracks } from "../features/tracks/topTracksSlice";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;

    setInput(Spotify.search());
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="search" className="search-label">
        Search Artist
      </label>
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
