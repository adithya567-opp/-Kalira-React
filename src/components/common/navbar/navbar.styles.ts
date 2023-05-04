import styled from "styled-components"

export const NavbarContainer = styled.div`
  -webkit-box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%);
  background-color: #fff;
  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: #282c3f;
    margin-left: 2rem;
  }

  .navigation {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    .left {
      display: flex;
      align-items: center;
    }
  }

  .right {
    .nav-icon {
      font-size: 18px;
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }
  .hamburger {
    display: none;
  }

  @media (max-width: 59em) {
    padding: 0 2rem;
    .navigation {
      justify-content: space-between;
      width: 100%;
      nav {
        display: none;
      }
    }
  }

  @media (max-width: 34em) {
    .navigation {
      justify-content: space-between;
      width: 100%;
      nav {
        display: none;
      }

      .left {
        margin-bottom: 1rem;
      }

      .hamburger {
        display: block;
      }
    }
  }
`
