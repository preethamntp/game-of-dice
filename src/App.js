import "./App.css";
import RollOn from "./components/RollOn";

function App() {
  return (
    <div className="App">
      {/* {[1, 2, 3, 4, 5, 6].map(v => (
        <Die key={v} value={v} />
      ))} */}

      <RollOn />
    </div>
  );
}

export default App;
