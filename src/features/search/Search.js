import { useSelector, useDispatch } from "react-redux";
import { searchArtist } from "./searchSlice";
import { selectArtistName } from "./searchSlice";
import { setArtist } from "./searchSlice";

const Search = () => {
  const input = useSelector(selectArtistName);
  const dispatch = useDispatch();

  const searchEndpoint = `https://api.spotify.com/v1/search?q=${input}&type=artist`;

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
