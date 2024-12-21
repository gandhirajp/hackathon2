import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Import your Navbar component
import HomePage from "./components/HomePage"; // Import HomePage or any component you want to use
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationIT from "./components/InformationIT";
import Engineering from "./components/Engineering";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes */}
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/information-technology" element={<InformationIT />} />
        <Route path="/engineering" element={<Engineering />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
