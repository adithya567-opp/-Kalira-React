import { FilterContainer } from "./sidebar-filter.styles"

export const SideBarFilter = () => {
  return (
    <FilterContainer className="side-filter">
      <div className="filter">
        <p className="filter-type">Price</p>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">High to Low</span>
        </div>
      </div>

      <div className="filter">
        <p className="filter-type">Ratings</p>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">High to Low</span>
        </div>
      </div>

      <div className="filter">
        <p className="filter-type">Name</p>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">Ascending</span>
        </div>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">Descending</span>
        </div>
      </div>

      <div className="filter">
        <p className="filter-type">Filter By Suppliers</p>
        <div className="type">
          <input type="checkbox" />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">High to Low</span>
        </div>
      </div>

      <div className="filter">
        <p className="filter-type">Filter By Brand</p>
        <div className="type">
          <input type="checkbox" />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="checkbox" />
          <span className="filter-text">High to Low</span>
        </div>
      </div>

      <div className="filter">
        <p className="filter-type">Filter by Saree Fabric</p>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">Low to High</span>
        </div>
        <div className="type">
          <input type="radio" />
          <span className="filter-text">High to Low</span>
        </div>
      </div>
    </FilterContainer>
  )
}
