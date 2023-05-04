import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers"

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: null,
    sortByRating: null,
    suppliers: { sareeShop: false, vastrananda: false, sainoor: false, sareemall: false, textileCatalog: false, Grubstakar: false, misriFashion: false },
    fabric: { polyGeorgette: false, silkBlend: false, polyChiffon: false, brasso: false, organza: false },
    price: 10000,
  })

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>
}

const useFilter = () => useContext(FilterContext)

export { FilterContext, FilterProvider, useFilter }
