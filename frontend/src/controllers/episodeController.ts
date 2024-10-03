import axios from "axios"
import { Episode } from "../types/Episode"

export const fetchAllEpisodes = async (): Promise<Episode[]> => {
  let episodes: Episode[] = []
  let nextUrl = "https://rickandmortyapi.com/api/episode"

  while (nextUrl) {
    const response = await axios.get(nextUrl)
    episodes = [...episodes, ...response.data.results]
    nextUrl = response.data.info.next
  }

  return episodes
}
