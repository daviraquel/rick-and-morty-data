import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around list-none m-0 p-0">
        <li className="mx-4">
          <Link to="/home" className="text-white text-lg hover:underline">
            Home
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/character" className="text-white text-lg hover:underline">
            Characters
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/location" className="text-white text-lg hover:underline">
            Locations
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/episode" className="text-white text-lg hover:underline">
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
