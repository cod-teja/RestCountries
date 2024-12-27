

import styles from "./CountryDetailsShimmer.css"

const CountryDetailShimmer = () => {
  return (
    <div className="country-details">
      <div className="shimmer-country-details"> </div>
      <div className="details-text-container">
        <div className="shimmer-country-name"></div>
        <div className="details-text">
          {Array.from({ length: 10 }).map((ele,idx) => (
            <p key={idx} className="shimmer-country-p"></p>
          ))}
        </div>
      </div>
    </div>
  )
}


export default CountryDetailShimmer