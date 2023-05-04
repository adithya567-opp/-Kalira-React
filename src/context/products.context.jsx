import { collections } from "data/collection"
import { useContext, useState, useEffect, createContext } from "react"

const ProductsContext = createContext([])

const ProductsProvider = ({ children }) => {
  const [products, setProducs] = useState([])
  const [suppliers, setSuppliers] = useState([])

  const [fabric, setFabric] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // console.log('from context', category);

  const fetchProducts = () => {
    const products = collections
    setProducs(products)

    const suppliers = collections.map((item) => item.supplierName)
    setSuppliers(suppliers)

    const fabric = collections.map((item) => item.sareeFabric)
    setFabric(fabric)
  }

  useEffect(() => {
    setIsLoading(true)
    const intervalID = setTimeout(() => {
      fetchProducts()
      setIsLoading(false)
    }, 3000)
    return () => clearInterval(intervalID)
  }, [])

  return <ProductsContext.Provider value={{ products, fabric, setFabric, isLoading, setProducs, suppliers }}>{children}</ProductsContext.Provider>
}

const useProducts = () => useContext(ProductsContext)

export { ProductsContext, ProductsProvider, useProducts }
