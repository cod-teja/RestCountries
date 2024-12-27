import React, { useContext, useEffect, useState } from "react"
import Borders from "./Borders"
import "./CountryDetails.css"
import { useLocation, useParams } from "react-router"
import CountryDetailShimmer from "./CountryDetailsShimmer"
import { ThemeContext } from "../contexts/ThemeContext"

export default function CountryDetails() {
  const { country } = useParams()
  const [countryDetails, setCountryDetails] = useState(null)
  const [isError, setIsError] = useState(false)
  const { state } = useLocation()

  const [isDark] = useContext(ThemeContext)

  function updateData(data) {
    setCountryDetails({
      flag: data.flags.svg,
      name: data?.name?.common,
      nativeName: Object.values(data?.name?.nativeName=== undefined ? {}:data?.name?.nativeName)[0]?.common,
      population: data?.population?.toLocaleString("en-IN"),
      region: data?.region,
      topLevelDomain: data?.tld?.join(", "),
      subregion: data?.subregion,
      capital: data?.capital,
      currencies: Object.values(data?.currencies=== undefined ? {}:data?.currencies=== undefined)
        .map((currency) => currency?.name)
        .join(", "),
      languages: Object.values(data?.languages== undefined ? {}:data?.languages).join(", "),
      borders: data.borders ? data.borders : null,
    })
  }

  useEffect(() => {
    if (state) {
      updateData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateData(data)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [country])

  if (isError) {
    return <div>No Country Found</div>
  }

  return countryDetails !== null ? (
    <main className={`country-detail ${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back()
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryDetails.flag} alt="" />
          <div className="details-text-container">
            <h1>{countryDetails.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryDetails.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryDetails.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region"> {countryDetails.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryDetails.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryDetails.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">
                  {countryDetails.topLevelDomain}
                </span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryDetails.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryDetails.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              {countryDetails.borders ? (
                <>
                  <b>Border Countries: </b>
                  <Borders borders={countryDetails?.borders} />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <CountryDetailShimmer />
  )
}
