import "./App.css";
import { selectSong } from "../actions";
import SongList from "./songList";

function App() {
  return (
    <div className="App">
      <SongList />
    </div>
  );
}

export default App;
