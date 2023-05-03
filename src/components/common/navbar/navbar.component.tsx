import { Link } from "react-router-dom"
import { NavbarContainer } from "./navbar.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navigation">
        <div className="left">
          <img src="https://kalira.in/images/images/logo@1920w.webp" alt="logo" width={53} />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/product/:id">Details</Link>
            <Link to="/support">Support</Link>
          </nav>
        </div>

        <div className="right">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            <FontAwesomeIcon icon={faBars} className="nav-icon hamburger" />
          </div>
        </div>
      </div>
    </NavbarContainer>
  )
}
