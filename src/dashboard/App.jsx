import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import HomeFlashcards from "../fashcards/HomeFlashcards";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<HomeFlashcards />} />
      </Routes>
    </>
  );
}

export default App;
