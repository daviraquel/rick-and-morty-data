import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { analysisContainerClassName } from "../../helpers/styles"

const EpisodeAnalysis: React.FC = () => {
  const { episodes } = useSelector((state: RootState) => state.episodes)

  const seasonCount = episodes.reduce(
    (acc: Record<string, number>, episode) => {
      const season = episode.episode.split("E")[1] // Ensure season is a string
      acc[season] = (acc[season] || 0) + 1
      return acc
    },
    {}
  )

  return (
    <div className={`${analysisContainerClassName}`}>
      <h2 className="text-2xl font-bold mb-4">Episode Analysis</h2>
      <table className="">
        <thead>
          <tr>
            <th className="py-2">Season</th>
            <th className="py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(seasonCount).map(([season, count]) => (
            <tr key={season}>
              <td className="border px-4 py-2">{season}</td>
              <td className="border px-4 py-2">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EpisodeAnalysis
