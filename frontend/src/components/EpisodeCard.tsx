import React from "react"
import { Link } from "react-router-dom"
import { Episode } from "../types/Episode"

interface EpisodeCardProps {
  episode: Episode
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">{episode.name}</h2>
      <p className="text-gray-700 mb-2">
        <strong>Episode:</strong> {episode.episode}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Air Date:</strong> {episode.air_date}
      </p>
      <Link
        to={`/episode/${episode.id}`}
        className="text-blue-500 hover:underline mt-4"
      >
        View More
      </Link>
    </div>
  )
}

export default EpisodeCard
