import logo from "./logo.svg";
import Rando from "./Rando";
import Scorekeeper from "./Scorekeeper";
import BrokenClick from "./BrokenClick";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Rando />
      <Scorekeeper fname="SAP LABS" status="not selected" />
      <BrokenClick />
    </div>
  );
}

export default App;
