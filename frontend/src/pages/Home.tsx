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
      <div className="z-10 mx-auto px-4 pt-4 relative ">
        <div className="border-portalGreen border-2 bg-gray-900 max-w-[50%] mx-auto mb-2 rounded-xl">
          <h1 className="text-rickBlue text-3xl font-bold">
            Rick and Morty Data Visualization
          </h1>
          <p className="text-mortyYellow">
            Explore the Rick and Morty universe!
          </p>
          <p className="text-mortyYellow">
            With better and improved visualization of the{" "}
            <a href="https://rickandmortyapi.com/">Rick and Morty API</a>.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Selector options={dataTypeOptions} setState={setSelectedDataType} />
          <Selector options={viewTypeOptions} setState={setSelectedViewType} />
        </div>
        {selectedDataType === "Characters" && (
          <CharacterView selectedViewType={selectedViewType} />
        )}
        {selectedDataType !== "Characters" && (
          <p className="p-6 bg-mortyYellow text-black text-xl font-bold mt-8 max-">
            Sorry for the inconvenience, this is under development.
          </p>
        )}
      </div>
    </PageLayout>
  )
}

export default Home
