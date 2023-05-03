import { ProductCard, SideBarFilter } from "components/index"
import { collections } from "data/collection"
import { ProductsPageContainer } from "./products.style"

export const ProductsPage = () => {
  return (
    <ProductsPageContainer>
      {/* top filter */}
      <div className="top-filter">
        <h2>
          Showing Products of - <span>282c3f</span>
        </h2>
      </div>
      <div className="main-container">
        <SideBarFilter />
        <main className="products">
          {collections.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
          {/* pagination */}
        </main>
      </div>
    </ProductsPageContainer>
  )
}
