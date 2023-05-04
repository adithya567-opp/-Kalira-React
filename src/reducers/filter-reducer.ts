export const filterReducer = (state: any, action: any) => {
  console.log("ction from reducer:", state)
  console.log("clicked", action.type)
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" }
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" }

    case "RATING":
      return { ...state, sortBy: "RATING" }

    case "WOMENS":
      return {
        ...state,
        category: { ...state.category, womens: !state.category.womens },
      }
    case "MENS":
      return {
        ...state,
        category: { ...state.category, mens: !state.category.mens },
      }

    case "SHOES":
      return {
        ...state,
        category: { ...state.category, shoes: !state.category.shoes },
      }

    case "JACKETS":
      return {
        ...state,
        category: { ...state.category, jackets: !state.category.jackets },
      }

    // new arrival

    case "NEW_ARRIVAL":
      return {
        ...state,
        category: { ...state, newArrival: !state.newArrival },
      }

    case "PRICE":
      return {
        ...state,
        price: action.priceValue,
      }

    case "CLEAR":
      return {
        sortBy: "",
        category: { mens: false, womens: false, shoes: false, jackets: false },
        isTrending: "",
        price: 10000,
        rating: "",
        newArrival: "",
      }

    default:
      return state
  }
}
