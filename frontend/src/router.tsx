import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Character from "./pages/Character"
import Location from "./pages/Location"
import Episode from "./pages/Episode"
import LocationInfo from "./pages/LocationsInfo"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location/:id" element={<LocationInfo />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
