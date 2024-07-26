import { Link } from "react-router-dom";
import arrowRight from "../../assets/right.svg";
import ProductsFilter from "./components/productsFilter";

const ProductsPage = () => {
  return (
    <>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/produtos" className="text-black">
          Produtos
        </Link>
      </nav>
      <ProductsFilter />
    </>
  );
};

export default ProductsPage;
