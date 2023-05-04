import { createContext, useReducer } from "react"
import { filterReducer } from "../reducers"

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: null,
    category: { womens: false, mens: false, shoes: false, jackets: false },
    isTrending: null,
    price: 10000,
    newArrival: null,
  })

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>
}

export { FilterContext, FilterProvider }
