import styled from "styled-components"

export const ProductCardContainer = styled.div`
  padding: 1rem;
  max-width: 210px;
  text-align: left;
  position: relative;
  vertical-align: top;
  overflow: hidden;
  margin: 0 10px 30px;
  cursor: pointer;
  border: 4px;
  &:hover {
    box-shadow: 0 2px 16px 4px rgb(40 44 63 / 7%);
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  .material {
    /* color: #535766; */

    margin-top: 1rem;
    font-size: 12px;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
  }

  .btn-container {
    display: flex;
    gap: 0.6rem;
  }

  .product-title {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #282c3f;
    margin: 0.8rem 0;
  }

  .pricing {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    .mrp {
      font-size: 1.4rem;
      font-weight: 700;
      color: #282c3f;
    }

    .original-price {
      font-size: 1.2rem;
      color: #7e818c;
      font-weight: 400;
      text-decoration: line-through;
    }

    .discount {
      font-size: 1.2rem;
      color: #ff905a;
      font-weight: 400;
    }
  }

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
`
