import { useSelector } from "react-redux";
import TopTracks from "../features/tracks/TopTracks";
import { selectArtistTopTracks } from "../features/tracks/topTracksSlice";

const TrackList = () => {
  const artistTopTracks = useSelector(selectArtistTopTracks);

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
