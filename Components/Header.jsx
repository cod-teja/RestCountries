import React, { useContext, useState } from "react"

import { useTheme } from "../hooks/Themehook";

const Header = () => {
  

  const [isDark, setIsDark] = useTheme() 




  return (
    <header className={`header-container ${isDark ? "dark":""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem("setDark",!isDark)
          }}
          className="theme-changer"
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  )
}

export default Header
