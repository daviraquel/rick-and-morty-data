import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { CharacterViewCards } from "./CharacterViewCards"
import { CharacterViewData } from "./CharacterViewData"
import { CharacterViewAnalysis } from "./CharacterViewAnalysis"
import { Character } from "../../types/Character"
import CharacterInfo from "./CharacterInfo"

interface ICharacterViewProps {
  selectedViewType: string
}

export const CharacterView: React.FC<ICharacterViewProps> = ({
  selectedViewType,
}: ICharacterViewProps) => {
  const { characters } = useSelector((state: RootState) => state.characters)
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    {} as Character
  )

  return (
    <div className="pt-2 bg-transparent">
      {selectedViewType === "Cards" && (
        <CharacterViewCards
          characters={characters}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}
      {selectedViewType === "Data" && (
        <CharacterViewData
          characters={characters}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}
      {selectedViewType === "Analysis" && (
        <CharacterViewAnalysis characters={characters} />
      )}
      {selectedCharacter.name && (
        <CharacterInfo
          character={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
        />
      )}
    </div>
  )
}
