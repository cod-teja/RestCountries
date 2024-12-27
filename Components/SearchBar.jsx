import React from "react"
import { useFilterData } from "../hooks/FilterDataHook"

export default function SearchBar() {
  const [countriesData, filteredData, setSearchText] = useFilterData()

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
    </div>
  )
}
