import { useContext } from "react"
import { FilterData } from "../contexts/FilterDataContext"



export const useFilterData = () =>{

    return useContext(FilterData)
}