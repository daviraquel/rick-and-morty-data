import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "./slices/characterSlice"
import locationReducer from "./slices/locationSlice"
import episodeReducer from "./slices/episodeSlice"

const store = configureStore({
  reducer: {
    characters: characterReducer,
    locations: locationReducer,
    episodes: episodeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
