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
      nav {
      }
    }
  }
`
