import { Character } from "../../types/Character"

interface CharacterTableProps {
  characters: Character[]
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
}

const CharacterTable: React.FC<CharacterTableProps> = ({
  characters,
  setSelectedCharacter,
}) => {
  const tableDataClassName = "text-ellipsis text-nowrap"
  return (
    <table className="w-full z-10 relative bg-gray-900">
      <thead className="sticky top-0 bg-gray-900">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Type</th>
          <th>Gender</th>
          <th>Origin</th>
          <th>Location</th>
          <th>Image</th>
          <th>Episode Count</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr
            key={character.id}
            onClick={() => setSelectedCharacter(character)}
          >
            <td className={tableDataClassName}>{character.id}</td>
            <td className={tableDataClassName}>{character.name}</td>
            <td className={tableDataClassName}>{character.status}</td>
            <td className={tableDataClassName}>{character.species}</td>
            <td className={tableDataClassName}>{character.type || "N/A"}</td>
            <td className={tableDataClassName}>{character.gender}</td>
            <td className={tableDataClassName}>{character.origin.name}</td>
            <td className={tableDataClassName}>{character.location.name}</td>
            <td className={tableDataClassName}>
              <img src={character.image} alt={character.name} width="50" />
            </td>
            <td className={tableDataClassName}>{character.episode.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CharacterTable
