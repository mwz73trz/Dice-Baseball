import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Pitch from "./components/Pitch";
import Hit from "./components/Hit";
import Bases from "./components/Bases";

function App() {
  return (
    <div className="App">
      <h1>Dice Baseball Game</h1>
      <Scoreboard />
      <Pitch />
      <Hit />
      <Bases />
    </div>
  );
}

export default App;
