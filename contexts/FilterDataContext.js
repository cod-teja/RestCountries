import { Children, createContext, useEffect, useState } from "react"

export const FilterData = createContext([])

export const FilterDataProvider = ({ children }) => {

  const [countriesData, setCountriesData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState("")
  const [region,setRegion]  = useState("")

  useEffect(() => {
    const loadData = countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase() )
    )
    setFilteredData(loadData)
  }, [searchText])

  useEffect(() => {
    const loadData = countriesData.filter((country) =>
      country.region.toLowerCase().includes(region.toLowerCase() )
    )
    setFilteredData(loadData)
  }, [region])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
        setFilteredData(data)
      })
  }, [])

  return (
    <FilterData.Provider value={[countriesData, filteredData, setSearchText,setRegion]}>
      {children}
    </FilterData.Provider>
  )
}
