import React from "react"
import { Link } from "react-router"

export default function CountryCard({
  countryName,
  flag,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link className="country-card" to={`/${countryName}`} state={{ ...data }}>
      <div className="country-card-image">
        <img src={flag} alt={countryName} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{countryName}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  )
}
