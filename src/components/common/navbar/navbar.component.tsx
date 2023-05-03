import { Link } from "react-router-dom"
import { NavbarContainer } from "./navbar.styles"

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
          <div>
            {/* icon */}
            <Link to="/some">Profile</Link>
            <Link to="/some">Cart</Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  )
}
