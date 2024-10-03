import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PageLayout from "../components/PageLayout"
import { fetchCharacters } from "../store/slices/characterSlice"
import { RootState, AppDispatch } from "../store"

const CharacterInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  )

  useEffect(() => {
    if (!id) {
      navigate("/character") // Redirect if no ID is present
      return
    }
    if (characters.length === 0) {
      dispatch(fetchCharacters())
    }
  }, [dispatch, characters.length, id, navigate])

  const character = characters.find((char) => char.id === parseInt(id!))

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!character) return <div>Character not found</div>

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-auto mb-4 rounded"
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
    </PageLayout>
  )
}

export default CharacterInfo
