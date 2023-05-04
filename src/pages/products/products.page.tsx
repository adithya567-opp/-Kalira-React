/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ProductCard, Shimmer, SideBarFilter } from "components/index"
import { collections } from "data/collection"
import { ProductsPageContainer } from "./products.style"
import { useProducts } from "context"

export const ProductsPage = () => {
  const { products, isLoading } = useProducts()
  return (
    <ProductsPageContainer>
      {/* top filter */}
      <div className="top-filter">
        <h2>
          Showing Products of - <span>{products.length}</span>
        </h2>
      </div>
      <div className="main-container">
        <div className="sidebar-filter">
          <SideBarFilter />
        </div>
        <main className="products">
          {isLoading &&
            collections.map((i) => (
              <div className="products">
                <Shimmer key={i} />
              </div>
            ))}
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
          {/* pagination */}
        </main>
      </div>
    </ProductsPageContainer>
  )
}
