import styled from "styled-components"

export const FilterContainer = styled.aside`
  flex-basis: 140px;
  .filter {
    padding-bottom: 2rem;
    border-bottom: 1px solid #d4d5d9;
    margin-top: 2rem;
    .filter-type {
      font-size: 1.4rem;
      font-weight: 700;
      color: #282c3f;
    }
    .type {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .filter-text {
      font-size: 1.4rem;
      font-weight: 400;
      color: #282c3f;
    }
  }
`
