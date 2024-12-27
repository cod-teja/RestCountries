import styles from "./CountriCardsShimmer.css"

const CountryCardShimmer = () => {
  return (
    <>
      {Array(12)
        .fill("")
        .map((country, i) => (
          <div className="country-card-shimmer" key={i}>
            <div className="country-shimmer-img"></div>

            <h3 className="card-title shimmer-header"></h3>
            <p className="shimmer-p"></p>
            <p className="shimmer-p"></p>
            <p className="shimmer-p"></p>
          </div>
        ))}
    </>
  )
}

export default CountryCardShimmer
