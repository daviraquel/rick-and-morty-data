import React from "react"
import { Character } from "../types/Character"

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto mb-2 rounded"
      />
      <p className="text-lg font-semibold">{character.name}</p>
      <p className="text-sm text-gray-600">{character.species}</p>
      <p className="text-sm text-gray-600">{character.status}</p>
    </div>
  )
}

export default CharacterCard
