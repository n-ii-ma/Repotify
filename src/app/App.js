import Search from "../components/Search";
import TrackList from "../components/TrackList";
import "../reset.css";
import "../App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Top Tracks from the Artists You Love</h1>
        </header>
        <Search />
        <TrackList />
      </div>
    </div>
  );
}

export default App;
