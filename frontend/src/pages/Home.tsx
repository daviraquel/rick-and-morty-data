import React, { useState } from "react"
import PageLayout from "../components/PageLayout"
import { Selector } from "../components/Selector"
import {
  dataTypeOptions,
  viewTypeOptions,
} from "../helpers/homeSelectorOptions"
import { CharacterView } from "../components/Character/CharacterView"

const Home: React.FC = () => {
  const [selectedDataType, setSelectedDataType] = useState(dataTypeOptions[0])
  const [selectedViewType, setSelectedViewType] = useState(viewTypeOptions[0])
  return (
    <PageLayout>
      <div className="container mx-auto px-4 pt-4">
        <h1 className="text-rickBlue text-3xl font-bold">
          Rick and Morty Data Visualization
        </h1>
        <p className="text-mortyYellow">
          Explore the universe with Rick and Morty! This is a page for better
          visualization of the{" "}
          <a href="https://rickandmortyapi.com/">Rick and Morty API</a>.
        </p>
        <div className="flex flex-col gap-2">
          <Selector options={dataTypeOptions} setState={setSelectedDataType} />
          <Selector options={viewTypeOptions} setState={setSelectedViewType} />
        </div>
        {selectedDataType === "Characters" && (
          <CharacterView selectedViewType={selectedViewType} />
        )}
        {selectedDataType !== "Characters" && (
          <p>Sorry for the inconvenience, this is under development.</p>
        )}
      </div>
    </PageLayout>
  )
}

export default Home
