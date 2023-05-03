import styled from "styled-components"

export const ProductDetailsContainer = styled.div`
  .breadcrumb {
    margin: 4rem 0;
    display: flex;
    gap: 2rem;
    align-items: center;

    span {
      font-weight: 400;
      font-size: 1.6rem;
      text-align: center;
      cursor: pointer;
    }
  }

  main {
    display: flex;
    gap: 8rem;
    .product-images {
      /* padding: 2rem; */
      max-width: 400px;
      img {
        object-fit: cover;
        transition: all 0.2s;
        &:hover {
          /* transform: scale(1.1); */
        }
      }
    }
  }
`

export const ProductDetail = styled.div`
  .product-name {
    font-size: 2.4rem;
    font-weight: 700;
    color: #282c3f;
  }

  .product-code {
    font-size: 2.2rem;
    font-weight: 500;
  }

  .pricing {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    border-top: 1px solid #d4d5d9;
    .mrp {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 700;
      color: #282c3f;
    }

    .original-price {
      margin-top: 1rem;
      font-size: 2rem;
      color: #7e818c;
      font-weight: 400;
      text-decoration: line-through;
    }

    .discount {
      margin-top: 1rem;
      font-size: 2rem;
      color: #ff905a;
      font-weight: 400;
    }
  }

  .btn-container {
    display: flex;
    gap: 2rem;

    margin-top: 2rem;

    button {
      border-radius: 0;
      padding: 6px 4px;
      /* min-width: 108px; */
      font-weight: 700;
      cursor: pointer;
      background-color: #ff3e6c;
      border-radius: 4px;
      border: none;
      color: #fff;
      font-size: 1.2rem;
      font-family: inherit;
      text-align: center;
      width: 100%;
    }

    .secondary-btn {
      border-radius: 0;
      padding: 6px 4px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 4px;
      border: none;
      border: 1px solid #d4d5d9;
      background-color: #fff;
      letter-spacing: 0.4px;
      color: #282c3f;
    }
  }

  .other-details {
    font-size: 1.8rem;
    margin-top: 2rem;
    li {
      list-style: none;
    }

    span {
      font-weight: 700;
    }
  }
`
