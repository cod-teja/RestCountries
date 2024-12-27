import { createContext, useState } from "react"

export const ThemeContext = createContext("setUpDark")

const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("setDark"))
  )


  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

