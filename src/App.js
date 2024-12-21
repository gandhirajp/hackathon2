import React from "react";
import "./App.css";
import HomePage from "./components/HomePage"; // Import HomePage or any component you want to use
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationIT from "./components/InformationIT";
import Engineering from "./components/Engineering";
import GovernmentServices from "./components/GovernmentServices";
import Management from "./components/Management";
import OperationsLogistics from "./components/OperationsLogistics";
import PublicPolicy from "./components/PublicPolicy";
import ResearchDevelopment from "./components/ResearchDevelopment";
import TechnicalSkillTrades from "./components/TechnicalSkillTrades";
import Arts from "./components/Arts";
import CustomizedTimeline from "./components/TimeLine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/information-technology" element={<InformationIT />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/government-services" element={<GovernmentServices />} />
        <Route path="/management" element={<Management />} />
        <Route
          path="/operations-logistics-hospitality"
          element={<OperationsLogistics />}
        />
        <Route path="/public-policy-law-safety" element={<PublicPolicy />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route
          path="/technical-skill-trades"
          element={<TechnicalSkillTrades />}
        />
        <Route path="/agriculture" element={<TechnicalSkillTrades />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/media" element={<TechnicalSkillTrades />} />
        <Route path="/marketing" element={<TechnicalSkillTrades />} />
        <Route path="/business-finance" element={<TechnicalSkillTrades />} />
        <Route path="/health-wellness" element={<TechnicalSkillTrades />} />
        <Route path="/sports" element={<TechnicalSkillTrades />} />
        <Route path="/music" element={<TechnicalSkillTrades />} />
        <Route path="/ai-engineer" element={<CustomizedTimeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
