import { useFilter, useProducts } from "context"
import { FilterContainer } from "./sidebar-filter.styles"

export const SideBarFilter = () => {
  const PRICE_LOW_TO_HIGH = "PRICE_LOW_TO_HIGH"
  const PRICE_HIGH_TO_LOW = "PRICE_HIGH_TO_LOW"

  const { sortByPriceHandler, checkedBtnHandler, sortByRatingHandler } = useProducts()

  return (
    <FilterContainer className="side-filter">
      <div className="filter">
        <p className="filter-type">Filter By Suppliers</p>

        <div className="type">
          <input type="checkbox" name="Saree Shop" value="Saree Shop" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Saree Shop</span>
        </div>
        <div className="type">
          <input type="checkbox" name="Vastrananda" value="Vastrananda" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Vastrananda</span>
        </div>
        <div className="type">
          <input type="checkbox" name="Sainoor" value="Sainoor" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Sainoor</span>
        </div>
        <div className="type">
          <input type="checkbox" name="Sareemall" value="sareemall" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Sareemall</span>
        </div>
        <div className="type">
          <input type="checkbox" name="Textile Catalo" value="Textile Catalo" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Textile Catalog</span>
        </div>
        <div className="type">
          <input type="checkbox" name="Grubstakar" value="Grubstakar" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Grubstakar</span>
        </div>
        <div className="type">
          <input type="checkbox" name="Misri Fashion" value="Misri Fashion" onChange={(e) => checkedBtnHandler(e)} />
          <span className="filter-text">Misri Fashion</span>
        </div>
      </div>
      <div className="filter">
        <p className="filter-type">Price</p>
        <div className="type">
          <input type="radio" id="low-to-high" name="sort" value={PRICE_LOW_TO_HIGH} onChange={(e) => sortByPriceHandler(e)} />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="radio" name="sort" value={PRICE_HIGH_TO_LOW} onChange={(e) => sortByPriceHandler(e)} />
          <span className="filter-text">High to Low</span>
        </div>
      </div>

      <div className="filter">
        <p className="filter-type">Ratings</p>
        <div className="type">
          <input type="radio" id="low-to-high" value={"LOW_TO_HIGH"} name={"LOW_TO_HIGH"} onChange={(e) => sortByRatingHandler(e)} />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="radio" id="high-to-low" name="HIGH_TO_LOW" value={"HIGH_TO_LOW"} onChange={(e) => sortByRatingHandler(e)} />
          <span className="filter-text">High to Low</span>
        </div>
      </div>
    </FilterContainer>
  )
}
