import React, { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Borders({ borders }) {
  const [border, setborder] = useState(null)

  useEffect(() => {
    if (borders) {
      Promise.all(
        borders.map((bodr) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${bodr}`)
            .then((res) => res.json())
            .then(([data]) => data.name.common)
        })
      ).then((data) => {
        setborder(data)
      })
    }
  }, [borders])

  return (
    <>
      {border &&
        border.map((border) => (
          <Link key={border} to={`/${border}`}>
            {border}
          </Link>
        ))}
    </>
  )
}
