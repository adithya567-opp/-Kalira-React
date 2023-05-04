import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import { RouterProvider } from "react-router-dom"

import { routerConfig } from "router"
import { FilterProvider, ProductProvider } from "context"

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <RouterProvider router={routerConfig}></RouterProvider>
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
