import { Link } from "react-router-dom";
import arrowRight from "/assets/right.svg";
import databaseJSON from "../../../database.json";
import { formatFirstLetterToUpperCase } from "../../../utils/formatFirstLetterToUpperCase";
import ShoppingItem from "../../../components/shopping-item";

const BrandPage = () => {
  const brand = window.location.pathname.split("/")[2];
  const database = databaseJSON.products;

  const filteredProducts = database.filter(
    (product) => product.brand.toLowerCase() == brand
  );

  return (
    <div>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/marcas">Marcas</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to={`/marcas/${brand}`} className="text-black">
          {formatFirstLetterToUpperCase(brand)}
        </Link>
      </nav>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-wrap justify-between">
          <h4 className="font-bold text-2xl">
            {brand.length > 0
              ? formatFirstLetterToUpperCase(brand)
              : "Categorias"}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">
              Exibindo {filteredProducts.length > 0 ? 1 : 0}-
              {filteredProducts.length} de {filteredProducts.length} Resultados
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
        <div className="flex flex-wrap gap-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="mb-4" key={product.id}>
                <ShoppingItem product={product} />
              </div>
            ))
          ) : (
            <div className="flex flex-col m-auto gap-4 py-6">
              <span className="font-bold text-2xl text-center">
                Nenhum produto encontrado.
              </span>
              <Link to="/" className="button text-center">
                Voltar para a página inicial
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
