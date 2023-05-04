// /* eslint-disable @typescript-eslint/ban-ts-comment */
// // @ts-nocheck

// import { ProductCard, Shimmer, SideBarFilter } from "components/index"
// import { collections } from "data/collection"
// import { ProductsPageContainer } from "./products.style"
// import { useFilter, useProducts } from "context"

// export const ProductsPage = () => {
//   const { products, isLoading } = useProducts()

//   const {
//     state: { sortBy, suppliers, fabric, price },
//   } = useFilter()

//   const supplierFilter = (products, suppliers) => {
//     const { sareeShop, vastrananda, sainoor, sareemall, textileCatalog, Grubstakar, misriFashion } = suppliers

//     if (!sareeShop && !vastrananda && !sainoor && !sareemall && !textileCatalog && !Grubstakar && !misriFashion) return products
//     let sareeShopFiltered = []
//     let vastranandaFiltered = []
//     let sainoorFiltered = []
//     let sareemallFiltered = []
//     let textileCatalogFiltered = []
//     let GrubstakarFiltered = []
//     let misriFashionFiltered = []

//     if (sareeShop) {
//       sareeShopFiltered = products.filter((item) => item.categoryName === "sareeShop")
//     }
//     if (vastrananda) {
//       vastranandaFiltered = products.filter((item) => item.categoryName === "vastrananda")
//     }
//     if (sainoor) {
//       sainoorFiltered = products.filter((item) => item.categoryName === "sainoor")
//     }
//     if (sareemall) {
//       sareemallFiltered = products.filter((item) => item.categoryName === "sareemall")
//     }

//     if (textileCatalog) {
//       textileCatalogFiltered = products.filter((item) => item.categoryName === "textileCatalog")
//     }

//     if (Grubstakar) {
//       GrubstakarFiltered = products.filter((item) => item.categoryName === "Grubstakar")
//     }

//     if (misriFashion) {
//       misriFashionFiltered = products.filter((item) => item.categoryName === "misriFashion")
//     }

//     return [...sareeShopFiltered, ...vastranandaFiltered, ...sainoorFiltered, ...sareemallFiltered, ...textileCatalogFiltered, ...GrubstakarFiltered, ...misriFashionFiltered]
//   }
//   const fabricFilter = (products, fabric) => {
//     const { polyGeorgette, silkBlend, polyChiffon, brasso, organza } = fabric

//     if (!polyGeorgette && !silkBlend && !polyChiffon && !brasso && !organza) return products
//     let polyGeorgetteFiltered = []
//     let silkBlendFiltered = []
//     let polyChiffonFiltered = []
//     let brassoFiltered = []
//     let organzaFiltered = []

//     if (polyGeorgette) {
//       polyGeorgetteFiltered = products.filter((item) => item.categoryName === "polyGeorgette")
//     }
//     if (silkBlend) {
//       silkBlendFiltered = products.filter((item) => item.categoryName === "silkBlend")
//     }
//     if (polyChiffon) {
//       polyChiffonFiltered = products.filter((item) => item.categoryName === "polyChiffon")
//     }
//     if (brasso) {
//       brassoFiltered = products.filter((item) => item.categoryName === "brasso")
//     }

//     if (organza) {
//       organzaFiltered = products.filter((item) => item.categoryName === "organza")
//     }

//     return [...polyGeorgetteFiltered, ...silkBlendFiltered, ...polyChiffonFiltered, ...brassoFiltered, ...organzaFiltered]
//   }

//   const PriceFilter = (products, price) => {
//     return products.filter((item) => item.price <= price)
//   }

//   const sortProduct = (products, sortBy) => {
//     switch (sortBy) {
//       case "LOW_TO_HIGH":
//         return [...products].sort((a, b) => a.price - b.price)
//       case "HIGH_TO_LOW":
//         return [...products].sort((a, b) => b.price - a.price)
//       case "RATING":
//         return [...products].sort((a, b) => {
//           if (a.rating > b.rating) return -1
//           return 1
//         })

//       default:
//         return products
//     }
//   }

//   const ProductListFinal = sortProduct(PriceFilter(supplierFilter([...products], suppliers), price), sortBy)

//   console.log("Product list final", ProductListFinal)
//   return (
//     <ProductsPageContainer>
//       {/* top filter */}
//       <div className="top-filter">
//         <h2>
//           Showing Products of - <span>{products.length}</span>
//         </h2>
//       </div>
//       <div className="main-container">
//         <div className="sidebar-filter">
//           <SideBarFilter />
//         </div>
//         <main className="products">
//           {isLoading &&
//             collections.map((i) => (
//               <div className="products">
//                 <Shimmer key={i} />
//               </div>
//             ))}

//           {products.map((item) => (
//             <ProductCard item={item} key={item.id} />
//           ))}
//           {/* pagination */}
//         </main>
//       </div>
//     </ProductsPageContainer>
//   )
// }

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ProductCard, Shimmer, SideBarFilter } from "components/index"
import { collections } from "data/collection"
import { ProductsPageContainer } from "./products.style"
import { useFilter, useProducts } from "context"

export const ProductsPage = () => {
  const { products, filteredProduct, isLoading } = useProducts()

  return (
    <ProductsPageContainer>
      {/* top filter */}
      <div className="top-filter">
        <h2>
          Showing Products of - <span>{filteredProduct.length}</span>
        </h2>
      </div>
      <div className="main-container">
        <div className="sidebar-filter">
          <SideBarFilter />
        </div>
        <main className="products">
          {isLoading &&
            collections.map((i, index) => (
              <div className="products" key={index}>
                <Shimmer />
              </div>
            ))}

          {filteredProduct.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
          {/* pagination */}
        </main>
      </div>
    </ProductsPageContainer>
  )
}
