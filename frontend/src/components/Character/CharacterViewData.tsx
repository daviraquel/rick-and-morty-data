import React, { useState } from "react"
import { Character } from "../../types/Character"
import CharacterTable from "./CharacterTable"
import { TablePagination } from "../TablePagination"

interface ICharacterViewDataProps {
  characters: Character[]
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
}

export const CharacterViewData: React.FC<ICharacterViewDataProps> = ({
  characters,
  setSelectedCharacter,
}: ICharacterViewDataProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(characters.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="overflow-auto max-h-screen">
      <CharacterTable
        characters={currentItems}
        setSelectedCharacter={setSelectedCharacter}
      />
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
