import "./styles/App.css"
import store, { updatesamplestate } from "./Store";
import { useSnapshot } from "valtio";


function Valtion_Use_Sample() {

  function changeState(e) {
    updatesamplestate(e.target.value);
  }

  const snapshot = useSnapshot(store)
  return (

    // dont write css in this way unless its very necessary 
    // create css file for each page with their respective name in "src/styles" folder
    <div className="App"
    style={{
      width:"100%",
      background:"wheat",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center"
    }}
    >
      <input type="text" onChange={changeState} />
      <br/>
      {snapshot.sampleState}
    </div>
  );
}

export default Valtion_Use_Sample;
