import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacters } from "../store/slices/characterSlice"
import { fetchLocations } from "../store/slices/locationSlice"
import { fetchEpisodes } from "../store/slices/episodeSlice"
import { RootState, AppDispatch } from "../store"
import Navbar from "./NavBar"

interface PageLayoutProps {
  children: React.ReactNode
  fetchCharactersData?: boolean
  fetchLocationsData?: boolean
  fetchEpisodesData?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  fetchCharactersData = false,
  fetchLocationsData = false,
  fetchEpisodesData = false,
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
  const {
    episodes,
    loading: episodesLoading,
    error: episodesError,
  } = useSelector((state: RootState) => state.episodes)

  useEffect(() => {
    if (fetchCharactersData) {
      dispatch(fetchCharacters())
    }
    if (fetchLocationsData) {
      dispatch(fetchLocations())
    }
    if (fetchEpisodesData) {
      dispatch(fetchEpisodes())
    }
  }, [dispatch, fetchCharactersData, fetchLocationsData, fetchEpisodesData])

  const loading = charactersLoading || locationsLoading || episodesLoading
  const error = charactersError || locationsError || episodesError

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
          episodes,
        })}
    </div>
  )
}

export default PageLayout
