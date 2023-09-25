// import store, { updatesamplestate } from "./Store";
// import { useSnapshot } from "valtio";
// import Valtion_Use_Sample from "./Valtion_Use_Sample";
// import { BrowserRouter } from 'react-router-dom';
// import Loading from "./Components/Loading/Loading.tsx";
// import Navbar from "./Components/Navbar";


import "./styles/App.css"
import LoginPage from "./Pages/LoginPage.js";
// import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home/Home.tsx";
import Welcome from "./Pages/login/Welcome.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChapterDefault from "./Pages/Chapters/ChapterDefault";
import ProgressPage from "./Pages/PregressPage"
import RewardScreen from "./Components/RewardScreen/RewardScreen.tsx"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/Landing" element={<Home />} />
          <Route path="/chapter/:id" element={<ChapterDefault />} />
          <Route path="/leaderboard" element={<ProgressPage />} />
          <Route path="/result/:id" element={<RewardScreen />} / >
        </Routes>
      </div>
    </Router>

    // <ChapterDefault />
  );
}

export default App;
