import "./styles/App.css"
import store, { updatesamplestate } from "./Store";
import { useSnapshot } from "valtio";
import Valtion_Use_Sample from "./Valtion_Use_Sample";
import Navbar from "./Components/Navbar";


function App() {

  return (
    <Valtion_Use_Sample />
  );
}

export default App;
