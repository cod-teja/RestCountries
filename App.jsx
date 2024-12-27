import { Outlet } from "react-router"
import Header from "./Components/Header"
import { useContext, useState } from "react"
import ThemeProvider, { ThemeContext } from "./contexts/ThemeContext"

const App = () => {
  
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
