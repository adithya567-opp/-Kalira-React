export const filterReducer = (state: any, action: any) => {
  console.log("ction from reducer:", state)
  console.log("clicked", action.type)
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" }
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" }

    case "RATING_LOW_TO_HIGH":
      return { ...state, sortByRating: "LOW_TO_HIGH" }

    case "RATING_HIGH_TO_LOW":
      return { ...state, sortByRating: "HIGH_TO_LOW" }

    case "Saree Shop":
      return {
        ...state,
        suppliers: { ...state.suppliers, sareeShop: !state.suppliers.sareeShop },
      }
    case "Vastrananda":
      return {
        ...state,
        suppliers: { ...state.suppliers, vastrananda: !state.suppliers.vastrananda },
      }

    case "Sainoor":
      return {
        ...state,
        suppliers: { ...state.suppliers, sainoor: !state.suppliers.sainoor },
      }

    case "sareemall":
      return {
        ...state,
        suppliers: { ...state.suppliers, sareemall: !state.suppliers.sareemall },
      }

    case "textileCatalog":
      return {
        ...state,
        suppliers: { ...state.suppliers, textileCatalog: !state.suppliers.textileCatalog },
      }

    case "Grubstakar":
      return {
        ...state,
        suppliers: { ...state.suppliers, Grubstakar: !state.suppliers.Grubstakar },
      }

    case "Misri Fashion":
      return {
        ...state,
        suppliers: { ...state.suppliers, misriFashion: !state.suppliers.misriFashion },
      }

    // new arrival

    // case "CLEAR":
    //   return {
    //     sortBy: "",
    //     suppliers: { mens: false, womens: false, shoes: false, jackets: false },
    //     isTrending: "",
    //     price: 10000,
    //     rating: "",
    //     newArrival: "",
    //   }

    default:
      return state
  }
}
