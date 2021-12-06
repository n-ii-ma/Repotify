import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTopTracks } from "../features/tracks/topTracksSlice";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;
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
