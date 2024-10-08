import React from "react"
import { Character } from "../../types/Character"

interface ICharacterInfoProps {
  character: Character
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
}

const CharacterInfo: React.FC<ICharacterInfoProps> = ({
  character,
  setSelectedCharacter,
}: ICharacterInfoProps) => {
  return (
    <div
      className="fixed w-screen h-screen top-0 left-0  z-20 flex items-center justify-center bg-gray-800 bg-opacity-80 px-4 sm:px-0"
      onClick={() => setSelectedCharacter({} as Character)}
    >
      <button
        className="absolute top-0 right-0 bg-transparent text-portalGreen text-2xl"
        onClick={() => setSelectedCharacter({} as Character)}
      >
        X
      </button>
      <div
        className="relative p-4 flex flex-col items-center justify-center border-2 border-portalGreen bg-gray-800 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
        <img
          src={character.image}
          alt={character.name}
          className="w-[70%] sm:max-w-[300px] h-auto mb-4 rounded"
        />
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
        <p>
          <strong>Location:</strong> {character.location.name}
        </p>
        <a
          href={character.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4"
        >
          View API Data
        </a>
      </div>
    </div>
  )
}

export default CharacterInfo
