import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacters } from "../store/slices/characterSlice"
import { fetchLocations } from "../store/slices/locationSlice"
import { RootState, AppDispatch } from "../store"
import Navbar from "./NavBar"

interface PageLayoutProps {
  children: React.ReactNode
  fetchCharactersData?: boolean
  fetchLocationsData?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  fetchCharactersData = false,
  fetchLocationsData = false,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    characters,
    loading: charactersLoading,
    error: charactersError,
  } = useSelector((state: RootState) => state.characters)
  const {
    locations,
    loading: locationsLoading,
    error: locationsError,
  } = useSelector((state: RootState) => state.locations)

  useEffect(() => {
    if (fetchCharactersData) {
      dispatch(fetchCharacters())
    }
    if (fetchLocationsData) {
      dispatch(fetchLocations())
    }
  }, [dispatch, fetchCharactersData, fetchLocationsData])

  const loading = charactersLoading || locationsLoading
  const error = charactersError || locationsError

  return (
    <div>
      <Navbar />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading &&
        !error &&
        React.cloneElement(children as React.ReactElement, {
          characters,
          locations,
        })}
    </div>
  )
}

export default PageLayout
