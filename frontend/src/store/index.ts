import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "./slices/characterSlice"
import locationReducer from "./slices/locationSlice"

const store = configureStore({
  reducer: {
    characters: characterReducer,
    locations: locationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
