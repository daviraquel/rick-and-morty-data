import React from "react"
import PageLayout from "../components/PageLayout"
import CharacterAnalysis from "../components/CharacterAnalysis"
import LocationAnalysis from "../components/LocationAnalysis"
import EpisodeAnalysis from "../components/EpisodeAnalysis"

const AnalysisPage: React.FC = () => {
  return (
    <PageLayout
      fetchCharactersData={true}
      fetchLocationsData={true}
      fetchEpisodesData={true}
    >
      <div className="w-full">
        <CharacterAnalysis />
        <LocationAnalysis />
        <EpisodeAnalysis />
      </div>
    </PageLayout>
  )
}

export default AnalysisPage
