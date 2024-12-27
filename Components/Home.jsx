import React, { useState } from "react"
import SearchBar from "./SearchBar"
import SelectMenu from "./selectMenu"
import CountriesContainer from "./CountriesContainer"
import { useTheme } from "../hooks/Themehook"
import { FilterDataProvider } from "../contexts/FilterDataContext"

export default function Home() {
  const [isDark] = useTheme()

  return (
    <FilterDataProvider>
      <main className={`country-cards-container ${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
        <CountriesContainer />
      </main>
    </FilterDataProvider>
  )
}
