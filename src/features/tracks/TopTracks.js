const TopTracks = ({ track }) => {
  return (
    <div>
      <img
        className="artwork"
        src={track.album.images[2].url}
        alt="Album Artwork"
      />
      <p className="track-name" style={{ color: "white" }}>
        {track.name}
      </p>
      {!track.preview_url ? (
        "No Preview Available"
      ) : (
        <audio className="playback" controls>
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
};

export default TopTracks;
