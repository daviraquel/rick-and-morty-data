import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchLocations as fetchLocationsFromController } from "../../controllers/locationController"
import { Location } from "../../types/Location"

interface LocationState {
  locations: Location[]
  loading: boolean
  error: string | null
}

const initialState: LocationState = {
  locations: [],
  loading: false,
  error: null,
}

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    return await fetchLocationsFromController()
  }
)

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchLocations.fulfilled,
        (state, action: PayloadAction<Location[]>) => {
          state.locations = action.payload
          state.loading = false
        }
      )
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch locations"
      })
  },
})

export default locationSlice.reducer
