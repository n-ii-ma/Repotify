import { useState } from "react";

const TopTracks = ({ track }) => {
  const [loaded, setLoaded] = useState(false);

  const finishLoading = () => {
    setLoaded(true);
  };

  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/track/${track.id}`}
        title={track.name}
        width="300"
        height="80"
        allowtransparency="true"
        allow="encrypted-media"
        className={loaded ? "shadow" : "tracks"}
        onLoad={finishLoading}
      ></iframe>
    </div>
  );
};

export default TopTracks;
