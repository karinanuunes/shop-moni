import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import ProductDetail from "./pages/ProductDetail/index.tsx";
import ShoppingCart from "./pages/ShoppingCart/index.tsx";
import ProductsPage from "./pages/ProductsPage/index.tsx";
import Layout from "./layout/layout.tsx";
import NotFoundPage from "./pages/NotFound/index.tsx";
import CategoriesPage from "./pages/Categories/index.tsx";
import CategoryPage from "./pages/Categories/Category/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produto/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <Layout>
        <ShoppingCart />
      </Layout>
    ),
  },
  {
    path: "/produtos",
    element: (
      <Layout>
        <ProductsPage />
      </Layout>
    ),
  },
  {
    path: "/categorias/",
    element: (
      <Layout>
        <CategoriesPage />
      </Layout>
    ),
  },
  {
    path: "/categorias/:category",
    element: (
      <Layout>
        <CategoryPage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
