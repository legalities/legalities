import "./styles/App.css"
import store, { updatesamplestate } from "./Store";
import { useSnapshot } from "valtio";
import Valtion_Use_Sample from "./Valtion_Use_Sample";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    // <Valtion_Use_Sample />

   <div>
     <BrowserRouter>
      <LoginPage/>
    </BrowserRouter>
   </div>
    
  );
}

export default App;
