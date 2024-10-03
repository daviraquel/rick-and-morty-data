import React from "react"
import { useSelector } from "react-redux"
import PageLayout from "../components/PageLayout"
import CharacterCard from "../components/CharacterCard"
import { RootState } from "../store"

const CharacterPage: React.FC = () => {
  const { characters } = useSelector((state: RootState) => state.characters)

  return (
    <PageLayout fetchCharactersData={true}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Characters</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}

export default CharacterPage
