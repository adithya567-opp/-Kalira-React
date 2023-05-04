export const getBySortedPrice = (data: any[], sortBy: string) => {
  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return data.sort((a: { listingPrice: number }, b: { listingPrice: number }) => a.listingPrice - b.listingPrice)
  }

  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return data.sort((a: { listingPrice: number }, b: { listingPrice: number }) => b.listingPrice - a.listingPrice)
  }

  return data
}

export const getByRating = (data: any[], rating: string) => {
  if (rating === "LOW_TO_HIGH") {
    return data.sort((a: { rating: number }, b: { rating: number }) => a.rating - b.rating)
  }

  if (rating === "HIGH_TO_LOW") {
    return data.sort((a: { rating: number }, b: { rating: number }) => b.rating - a.rating)
  }

  return data
}
