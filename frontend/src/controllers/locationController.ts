import axios from "axios"
import { Location } from "../types/Location"

export const fetchAllLocations = async (): Promise<Location[]> => {
  let locations: Location[] = []
  let nextUrl: string = "https://rickandmortyapi.com/api/location"

  while (nextUrl) {
    const response = await axios.get(nextUrl)
    locations = [...locations, ...response.data.results]
    nextUrl = response.data.info.next
  }

  return locations
}
