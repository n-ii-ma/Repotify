const TopTracks = ({ track }) => {
  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/track/${track.id}`}
        title={track.name}
        width="300"
        height="80"
        allowtransparency="true"
        allow="encrypted-media"
        className="tracks"
      ></iframe>
    </div>
  );
};

export default TopTracks;
