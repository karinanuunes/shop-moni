import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import ProductDetail from "./pages/ProductDetail/index.tsx";
import ShoppingCart from "./pages/ShoppingCart/index.tsx";
import ProductsPage from "./pages/ProductsPage/index.tsx";
import Layout from "./layout/layout.tsx";
import NotFoundPage from "./pages/NotFound/index.tsx";
import CategoriesPage from "./pages/Categories/index.tsx";
import CategoryPage from "./pages/Categories/Category/index.tsx";
import ProductsCategoryPage from "./pages/ProductsPage/ProductsCategory/index.tsx";
import SalePage from "./pages/Sale/index.tsx";
import NewArrivalPage from "./pages/NewArrival/index.tsx";
import BrandsPage from "./pages/Brands/index.tsx";
import BrandPage from "./pages/Brands/Brand/index.tsx";

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
    path: "/produtos/:produto",
    element: (
      <Layout>
        <ProductsCategoryPage />
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
    path: "/categorias/:categoria",
    element: (
      <Layout>
        <CategoryPage />
      </Layout>
    ),
  },
  {
    path: "/promocao",
    element: (
      <Layout>
        <SalePage />
      </Layout>
    ),
  },
  {
    path: "/colecao-nova",
    element: (
      <Layout>
        <NewArrivalPage />
      </Layout>
    ),
  },
  {
    path: "/marcas",
    element: (
      <Layout>
        <BrandsPage />
      </Layout>
    ),
  },
  {
    path: "/marcas/:marca",
    element: (
      <Layout>
        <BrandPage />
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
