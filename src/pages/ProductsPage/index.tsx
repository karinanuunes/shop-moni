import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import arrowRight from "../../assets/right.svg";
import ProductsFilter from "./components/productsFilter";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <div className="border-t max-w-7xl m-auto"></div>
      <nav className="flex items-center gap-1.5 max-w-7xl m-auto py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/produtos" className="text-black">
          Produtos
        </Link>
      </nav>
      <ProductsFilter />
      <Footer />
    </>
  );
};

export default ProductsPage;
