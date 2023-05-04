import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import { RouterProvider } from "react-router-dom"

import { routerConfig } from "router"
import { FilterProvider, ProductsProvider } from "context"

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <RouterProvider router={routerConfig}></RouterProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
