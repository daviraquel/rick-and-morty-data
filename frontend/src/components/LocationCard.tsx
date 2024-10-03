import React from "react"
import { Link } from "react-router-dom"
import { Location } from "../types/Location"

interface LocationCardProps {
  location: Location
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
      <p className="text-gray-700 mb-2">
        <strong>Type:</strong> {location.type}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Dimension:</strong> {location.dimension}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Residents:</strong> {location.residents.length}
      </p>
      <Link
        to={`/location/${location.id}`}
        className="text-blue-500 hover:underline mt-4"
      >
        View More
      </Link>
    </div>
  )
}

export default LocationCard
