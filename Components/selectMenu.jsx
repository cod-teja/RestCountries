import { useFilterData } from "../hooks/FilterDataHook"

export default function SelectMenu() {
  const [,,,setRegion] = useFilterData()

  return (
    <select
      className="filter-by-region"
      onChange={(e) => {
        setRegion(e.target.value)
      }}
    >
      <option hidden>Filter by Region</option>
      <option value="">All countries</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
