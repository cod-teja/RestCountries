import CountryCard from "./CountryCard"
import CountryCardShimmer from "./CountriCardsShimmer"
import { useFilterData } from "../hooks/FilterDataHook"

export default function CountriesContainer() {
  const [countriesData, filteredData, setSearchText] = useFilterData()

  

  return (
    <div className="countries-container">
      {countriesData.length === 0 ? (
        <CountryCardShimmer />
      ) : filteredData.length === 0 ? (
        <h1>No Country Found</h1>
      ) : (
        filteredData.map((country) => (
          <CountryCard
            key={country.name.common}
            countryName={country.name.common}
            flag={country.flags.svg}
            population={country.population.toLocaleString("en-IN")}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        ))
      )}
    </div>
  )
}
