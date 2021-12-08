import Search from "../features/search/Search";
import TrackList from "../components/TrackList";
import "../reset.css";
import "../App.css";

function App() {
  return (
    <div className="container">
      <div>
        <header>
          <h1>Top Tracks from the Artists You Love</h1>
        </header>
        <Search />
        <TrackList />
      </div>
      <div>
        <footer>&copy; All Rights Reserved</footer>
      </div>
    </div>
  );
}

export default App;
