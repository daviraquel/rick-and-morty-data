import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAllCharacters } from "../../controllers/characterController"
import { Character } from "../../types/Character"

interface CharacterState {
  characters: Character[]
  loading: boolean
  error: string | null
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
}

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    return await fetchAllCharacters()
  }
)

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.characters = action.payload
          state.loading = false
        }
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch characters"
      })
  },
})

export default characterSlice.reducer
