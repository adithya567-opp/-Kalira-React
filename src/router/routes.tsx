import { createBrowserRouter } from "react-router-dom"
import App from "App"
import { ProductDetailScreen, ProductsPage } from "pages/index"

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailScreen />,
      },
    ],
  },
])
