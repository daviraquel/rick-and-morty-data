import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacters } from "../store/slices/characterSlice"
import { fetchLocations } from "../store/slices/locationSlice"
import { fetchEpisodes } from "../store/slices/episodeSlice"
import { RootState, AppDispatch } from "../store"

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
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
    dispatch(fetchCharacters())
    dispatch(fetchLocations())
    dispatch(fetchEpisodes())
  }, [dispatch])

  const loading = charactersLoading || locationsLoading || episodesLoading
  const error = charactersError || locationsError || episodesError

  return (
    <div>
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
