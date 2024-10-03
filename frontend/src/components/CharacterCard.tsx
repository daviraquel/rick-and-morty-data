import React from "react"
import { Link } from "react-router-dom"
import { Character } from "../types/Character"

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto mb-2 rounded"
      />
      <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
      <p className="text-gray-700 mb-2">
        <strong>Species:</strong> {character.species}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Status:</strong> {character.status}
      </p>
      <Link
        to={`/character/${character.id}`}
        className="text-blue-500 hover:underline mt-4"
      >
        View More
      </Link>
    </div>
  )
}

export default CharacterCard
