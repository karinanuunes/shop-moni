import { Link } from "react-router-dom";
import arrowRight from "/assets/right.svg";
import ShoppingItem from "../../components/shopping-item";
import databaseJSON from "../../database.json";

const BrandsPage = () => {
  const database = databaseJSON.products;
  let categories = database
    .filter((category) => category.brand)
    .map((category) => category.brand);
  const uniqueCategories = [...categories].filter(
    (category, index) => categories.indexOf(category) === index
  );
  categories = uniqueCategories;

  return (
    <div>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/marcas" className="text-black">
          Marcas
        </Link>
      </nav>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-wrap justify-between">
          <h4 className="font-bold text-2xl">Marcas</h4>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">
              Exibindo {database.length > 0 ? 1 : 0}-{database.length} de{" "}
              {database.length} Resultados
            </span>
            <div>
              <span className="text-gray-600">Ordenar por:</span>
              <select className="font-medium cursor-pointer outline-none">
                <option value="Mais recentes">Mais recentes</option>
                <option value="Menor preço">Menor preço</option>
                <option value="Maior preço">Maior preço</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 py-2">
          {categories.map((category) => (
            <Link
              to={`/marcas/${category.toLowerCase()}`}
              className="button"
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          {database.map((product) => (
            <div className="mb-4" key={product.id}>
              <ShoppingItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
