import axios from "axios"
import { Character } from "../types/Character"

export const fetchAllCharacters = async (): Promise<Character[]> => {
  let characters: Character[] = []
  let nextUrl = "https://rickandmortyapi.com/api/character"

  while (nextUrl) {
    const response = await axios.get(nextUrl)
    characters = [...characters, ...response.data.results]
    nextUrl = response.data.info.next
  }

  return characters
}
