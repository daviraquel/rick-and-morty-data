import React from "react"
import { useSelector } from "react-redux"
import PageLayout from "../components/PageLayout"
import EpisodeCard from "../components/EpisodeCard"
import { RootState } from "../store"

const EpisodePage: React.FC = () => {
  const { episodes } = useSelector((state: RootState) => state.episodes)

  return (
    <PageLayout fetchEpisodesData={true}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Episodes</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {episodes.map((episode) => (
            <li key={episode.id}>
              <EpisodeCard episode={episode} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}

export default EpisodePage
