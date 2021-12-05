import Search from "../components/Search";
import TrackList from "../components/TrackList";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>The Top Tracks from Your Favorite Artists in One Place</h1>
      </header>
      <Search />
      <TrackList />
    </div>
  );
}

export default App;
