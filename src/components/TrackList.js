import { useSelector } from "react-redux";
import { selectArtistTopTracks } from "../features/tracks/topTracksSlice";
import { selectTopTracksIsLoading } from "../features/tracks/topTracksSlice";
import { selectTopTracksHasError } from "../features/tracks/topTracksSlice";
import { selectSearchIsLoading } from "../features/search/searchSlice";
import { selectSearchHasError } from "../features/search/searchSlice";
import IsLoading from "./IsLoading";
import SearchHasError from "./SearchHasError";
import TrackHasError from "./TrackHasError";
import TopTracks from "../features/tracks/TopTracks";

const TrackList = () => {
  const artistTopTracks = useSelector(selectArtistTopTracks);
  const topTracksIsLoading = useSelector(selectTopTracksIsLoading);
  const topTracksHasError = useSelector(selectTopTracksHasError);
  const searchIsLoading = useSelector(selectSearchIsLoading);
  const searchHasError = useSelector(selectSearchHasError);

  // Show Loading Spinner on Pending State and Show Error Message on Rejected State
  if (topTracksIsLoading || searchIsLoading) return <IsLoading />;
  if (searchHasError) return <SearchHasError />;
  if (topTracksHasError) return <TrackHasError />;

  return (
    <div>
      {!artistTopTracks
        ? ""
        : artistTopTracks.map((track) => (
            <TopTracks key={track.id} track={track} />
          ))}
    </div>
  );
};

export default TrackList;
