import { collections } from "data/collection"
import { useLocation, useNavigate, useParams } from "react-router"
import { ProductDetail, ProductDetailsContainer } from "./product-detail.styles"
import { useEffect, useState } from "react"

export const ProductDetailScreen = () => {
  const { id } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [product, setProduct] = useState<any>([])

  useEffect(() => {
    const fetchedProduct = collections.filter((p) => p.productId === Number(id))

    setProduct(fetchedProduct[0])
  }, [])

  if (product.length < 0) return <p>loadinggg.........</p>

  return (
    <ProductDetailsContainer>
      <div className="breadcrumb">
        <span onClick={() => navigate(-1)}> &larr; Go Back</span>

        <span>{pathname}</span>
      </div>

      <main>
        <div className="product-images">
          <img src={product?.primaryImage?.jpegImages?.lImage} alt="image" />
        </div>

        <ProductDetail className="product-details">
          <h1 className="product-name">{product?.name}</h1>

          <p className="product-code">{product?.code}</p>

          <div className="pricing">
            <span className="mrp">₹ {product?.mrp}</span>
            <span className="original-price">₹ {product.listingPrice}</span>
            <span className="discount">{product.discount} % OFF!</span>
          </div>

          <div className="other-details">
            <ul>
              <li>{product.description}</li>

              <li>Blouse Attached - {product.isActive ? <span>Yes</span> : <span>No</span>}</li>

              <li>
                Blouse Fabric - <span>{product.blouseFabric}</span>
              </li>
              <li>
                Saree Fabric - <span>{product.sareeFabric}</span>
              </li>
              <li>100% Original Products</li>
            </ul>
          </div>

          <div className="btn-container">
            <button>Buy Now</button>
            <button className="secondary-btn">Add to Wishlist</button>
          </div>
        </ProductDetail>
      </main>
    </ProductDetailsContainer>
  )
}
