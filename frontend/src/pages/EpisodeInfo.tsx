import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PageLayout from "../components/PageLayout"
import { fetchEpisodes } from "../store/slices/episodeSlice"
import { RootState, AppDispatch } from "../store"

const EpisodeInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { episodes, loading, error } = useSelector(
    (state: RootState) => state.episodes
  )

  useEffect(() => {
    if (!id) {
      navigate("/episode") // Redirect if no ID is present
      return
    }
    if (episodes.length === 0) {
      dispatch(fetchEpisodes())
    }
  }, [dispatch, episodes.length, id, navigate])

  const episode = episodes.find((ep) => ep.id === parseInt(id!))

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!episode) return <div>Episode not found</div>

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{episode.name}</h1>
        <p>
          <strong>Episode:</strong> {episode.episode}
        </p>
        <p>
          <strong>Air Date:</strong> {episode.air_date}
        </p>
        <p>
          <strong>Characters:</strong> {episode.characters.length}
        </p>
        <a
          href={episode.url}
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

export default EpisodeInfo
