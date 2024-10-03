import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import "./App.css"
import AppRouter from "./router"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
