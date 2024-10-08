import React from "react"
import { Character } from "../../types/Character"
import CharacterCard from "./CharacterCard"

interface ICharacterViewCardsProps {
  characters: Character[]
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
}

export const CharacterViewCards: React.FC<ICharacterViewCardsProps> = ({
  characters,
  setSelectedCharacter,
}: ICharacterViewCardsProps) => {
  return (
    <ul className="relative flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto">
      {characters.map((character) => (
        <li key={character.id} className="w-[80%] sm:w-full shrink-0">
          <CharacterCard
            character={character}
            setSelectedCharacter={setSelectedCharacter}
          />
        </li>
      ))}
    </ul>
  )
}
