import { useNavigate } from "react-router"
import { ProductCardContainer } from "./product-card.styles"

export const ProductCard = (props: any) => {
  const { item } = props
  const navigate = useNavigate()
  return (
    <ProductCardContainer>
      <img src={item.primaryImage.jpegImages.sImage} />

      <p className="product-title">{item.name}</p>

      <h1>{item.blouseAttached}</h1>

      <span className="material">{item.sareeFabric}</span>
      <div className="pricing">
        <span className="mrp">₹ {item.mrp}</span>
        <span className="original-price">₹ {item.listingPrice}</span>
        <span className="discount">{item.discount} % OFF!</span>
      </div>
      <div className="btn-container">
        <button className="secondary-btn" onClick={() => navigate(`/product/${item.productId}`)}>
          Quick View
        </button>
        <button>Add To Cart</button>
      </div>
    </ProductCardContainer>
  )
}
