import React from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Location from "./pages/Location"
import Episode from "./pages/Episode"
import LocationInfo from "./pages/LocationsInfo"
import EpisodeInfo from "./pages/EpisodeInfo"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<LocationInfo />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<EpisodeInfo />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
