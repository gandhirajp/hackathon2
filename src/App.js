import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"; // Import your Navbar component
import HomePage from "./components/HomePage"; // Import HomePage or any component you want to use
import InformationIT from "./components/InformationIT";
import Engineering from "./components/Engineering";
import CareerPathQues from "./components/CareerPathQuestions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes */}
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/information-technology" element={<InformationIT />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/career-path-selector" element={<CareerPathQues />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
