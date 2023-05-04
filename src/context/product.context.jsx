// new one

import { collections } from "data/collection"
import { useContext, useState, createContext, useEffect } from "react"
import { getByRating, getBySortedPrice } from "utils/product"

export const ProductContextNew = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [fabric, setFabric] = useState([])
  const [sortByRating, setSortByRating] = useState("")
  const [sortByPrice, setSortByPrice] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState("")
  const [isSuppliersSelected, setIsSuppliersSelected] = useState(false)
  const [isSortByPriceSelected, setISSortByPriceSelected] = useState(false)
  const [isSortByRatingSelected, setIsSortByRatingSelected] = useState(false)

  const fetchProducts = () => {
    const products = collections
    setProducts(products)

    const suppliers = Array.from(new Set(collections.flatMap((item) => item.supplierName)))
    setSuppliers(suppliers)

    const fabric = Array.from(new Set(collections.flatMap((item) => item.sareeFabric)))
    setFabric(fabric)
  }

  useEffect(() => {
    setIsLoading(true)
    const intervalID = setTimeout(() => {
      fetchProducts()
      setIsLoading(false)
    }, 2000)
    return () => clearInterval(intervalID)
  }, [])

  const sortByPriceHandler = (e) => {
    setSortByPrice(e.target.value)
    setISSortByPriceSelected(true)
  }

  const checkedBtnHandler = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSupplier(value)
    setIsSuppliersSelected(true)
    if (isChecked) {
      setSuppliers((pre) => [...pre, e.target.name])
    } else {
      const supplier = (pre) => pre.filter((item) => item !== e.target.name)

      setSuppliers(supplier)
    }
  }

  const getSuppliers = (data, supplier) => {
    const found = data.filter((supp) => supp.supplierName === supplier)

    return found
  }

  const sortByRatingHandler = (e) => {
    setSortByRating(e?.target?.value)
    setIsSortByRatingSelected(true)
  }

  const applyFilter = () => {
    let filteredData = [...products]

    if (isSuppliersSelected) {
      filteredData = getSuppliers(filteredData, selectedSupplier)
    }
    if (isSortByPriceSelected) {
      filteredData = getBySortedPrice(filteredData, sortByPrice).map((item) => item)
    }

    if (isSortByRatingSelected) {
      filteredData = getByRating(filteredData, sortByRating).map((item) => item)
    }

    setFilteredProduct(filteredData)
  }

  useEffect(() => {
    applyFilter()
  }, [suppliers, sortByPrice])

  return <ProductContextNew.Provider value={{ sortByRatingHandler, checkedBtnHandler, sortByPriceHandler, products, filteredProduct, isLoading }}>{children}</ProductContextNew.Provider>
}

export const useProducts = () => useContext(ProductContextNew)
