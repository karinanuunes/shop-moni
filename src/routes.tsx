import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import ProductDetail from "./pages/ProductDetail/index.tsx";
import ShoppingCart from "./pages/ShoppingCart/index.tsx";
import ProductsPage from "./pages/ProductsPage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produto/:id",
    element: <ProductDetail />,
  },
  {
    path: "/carrinho",
    element: <ShoppingCart />,
  },
  {
    path: "/produtos",
    element: <ProductsPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
