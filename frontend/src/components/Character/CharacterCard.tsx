import React from "react"
import { Character } from "../../types/Character"

interface CharacterCardProps {
  character: Character
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  setSelectedCharacter,
}) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center bg-gray-800">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto mb-2 rounded object-cover"
      />
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">
        {character.name}
      </h2>
      <p className="text-gray-300 mb-2">
        <strong>Species:</strong> {character.species}
      </p>
      <p className="text-gray-300 mb-2">
        <strong>Status:</strong> {character.status}
      </p>
      <button
        onClick={() => setSelectedCharacter(character)}
        className="text-rickBlue hover:text-portalGreen mt-4 transition-colors duration-200"
      >
        View More
      </button>
    </div>
  )
}

export default CharacterCard
