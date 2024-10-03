import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAllEpisodes } from "../../controllers/episodeController"
import { Episode } from "../../types/Episode"

interface EpisodeState {
  episodes: Episode[]
  loading: boolean
  error: string | null
}

const initialState: EpisodeState = {
  episodes: [],
  loading: false,
  error: null,
}

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async () => {
    return await fetchAllEpisodes()
  }
)

const episodeSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchEpisodes.fulfilled,
        (state, action: PayloadAction<Episode[]>) => {
          state.episodes = action.payload
          state.loading = false
        }
      )
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch episodes"
      })
  },
})

export default episodeSlice.reducer
