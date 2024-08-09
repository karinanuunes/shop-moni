import { Link } from "react-router-dom";
import arrowRight from "/assets/right.svg";
import ShoppingItem from "../../components/shopping-item";
import databaseJSON from "../../database.json";

const SalePage = () => {
  const database = databaseJSON.products;
  const products = database.filter((product) => product.discount > 0);

  return (
    <>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/promocao" className="text-black">
          Promoção
        </Link>
      </nav>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="mb-4" key={product.id}>
            <ShoppingItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SalePage;
