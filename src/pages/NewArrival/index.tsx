import { Link } from "react-router-dom";
import arrowRight from "../../assets/right.svg";
import databaseJSON from "../../database.json";
import ShoppingItem from "../../components/shopping-item";

const NewArrivalPage = () => {
  const database = databaseJSON.products;
  const products = database.filter(
    (product) => product.status === "Nova coleção"
  );

  return (
    <>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/colecao-nova" className="text-black">
          Coleção Nova
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

export default NewArrivalPage;
