import "./styles/App.css"
// import store, { updatesamplestate } from "./Store";
// import { useSnapshot } from "valtio";
// import Valtion_Use_Sample from "./Valtion_Use_Sample";
// import { BrowserRouter } from 'react-router-dom';
// import LoginPage from "./Pages/LoginPage";
// import LandingPage from "./Pages/LandingPage";
// import Welcome from "./Pages/login/Welcome.js";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from "./Components/Loading/Loading.tsx";
import ChapterDefault from "./Pages/Chapters/ChapterDefault";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    //   <Router>
    //   {/* // <Valtion_Use_Sample /> */}

    //  <div>
    //    <Routes>
    //     <Route path="/Login" element={<LoginPage />} />
    //     <Route path="/" element={<Welcome />} />
    //     <Route path="/Landing" element={<LandingPage />} />
    //   </Routes>,
    //   </div>
    //   </Router>

    <ChapterDefault />
  );
}

export default App;
