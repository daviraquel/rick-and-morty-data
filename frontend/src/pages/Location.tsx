import React from "react"
import { useSelector } from "react-redux"
import PageLayout from "../components/PageLayout"
import LocationCard from "../components/Location/LocationCard"
import { RootState } from "../store"

const LocationPage: React.FC = () => {
  const { locations } = useSelector((state: RootState) => state.locations)

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Locations</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location) => (
            <li key={location.id}>
              <LocationCard location={location} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}

export default LocationPage
