import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PageLayout from "../components/PageLayout"
import { fetchLocations } from "../store/slices/locationSlice"
import { RootState, AppDispatch } from "../store"

const LocationInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const { locations, loading, error } = useSelector(
    (state: RootState) => state.locations
  )

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(fetchLocations())
    }
  }, [dispatch, locations.length])

  const location = locations.find((loc) => loc.id === parseInt(id ? id : ""))

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!location) return <div>Location not found</div>

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{location.name}</h1>
        <p>
          <strong>Type:</strong> {location.type}
        </p>
        <p>
          <strong>Dimension:</strong> {location.dimension}
        </p>
        <p>
          <strong>Residents:</strong> {location.residents.length}
        </p>
        <p>
          <strong>Created:</strong>{" "}
          {new Date(location.created).toLocaleDateString()}
        </p>
        <a
          href={location.url}
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

export default LocationInfo
