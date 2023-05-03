import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import { RouterProvider } from "react-router-dom"

import { routerConfig } from "router"

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>,
  document.getElementById("root"),
)
