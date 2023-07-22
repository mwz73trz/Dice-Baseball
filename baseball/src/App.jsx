import "./App.css";
import Pitch from "./components/Pitch";
import Hit from "./components/Hit";
import Bases from "./components/Bases";

function App() {
  return (
    <div className="App">
      <h1>Dice Baseball Game</h1>
      <Pitch />
      <Hit />
      <Bases />
    </div>
  );
}

export default App;
