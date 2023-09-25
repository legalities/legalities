import "./styles/App.css"
// import store, { updatesamplestate } from "./Store";
// import { useSnapshot } from "valtio";
// import Valtion_Use_Sample from "./Valtion_Use_Sample";
// import Loading from "./Components/Loading/Loading.tsx";
import ChapterDefault from "./Pages/Chapters/ChapterDefault";
import ChapterQuestionComponent from "./Pages/Chapters/ChapterQuestionComponent";
// import Navbar from "./Components/Navbar";


function App() {

  return (
    <ChapterDefault>
        <ChapterQuestionComponent />
    </ChapterDefault>
  );
}

export default App;
