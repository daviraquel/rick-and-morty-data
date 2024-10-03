import axios from "axios"
import { Location } from "../types/Location"

export const fetchLocations = async (): Promise<Location[]> => {
  const response = await axios.get("https://rickandmortyapi.com/api/location")
  return response.data.results
}
