import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Character from "./pages/Character"
import Location from "./pages/Location"
import Episode from "./pages/Episode"
import LocationInfo from "./pages/LocationsInfo"
import CharacterInfo from "./pages/CharacterInfo"
import EpisodeInfo from "./pages/EpisodeInfo"
import AnalysisPage from "./pages/Analysis"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<LocationInfo />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<EpisodeInfo />} />
        <Route path="/analysis" element={<AnalysisPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
