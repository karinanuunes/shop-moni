import { Link } from "react-router-dom";
import arrowRight from "../../assets/right.svg";
import ShoppingItem from "../../components/shopping-item";
import databaseJSON from "../../database.json";

const CategoriesPage = () => {
  const database = databaseJSON.products;
  const categories = ["Casual", "Formal", "Festa", "Esportivo", "Elegante"];

  return (
    <div>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/categorias" className="text-black">
          Categorias
        </Link>
      </nav>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-wrap justify-between">
          <h4 className="font-bold text-2xl">Categorias</h4>
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
              to={`/categorias/${category.toLowerCase()}`}
              className="rounded-[62px] border px-6 py-3 hover:bg-black hover:text-white"
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          {database.length > 0 ? (
            database.map((product) => (
              <div className="mb-4" key={product.id}>
                <ShoppingItem product={product} />
              </div>
            ))
          ) : (
            <div className="flex flex-col m-auto gap-4 py-6">
              <span className="font-bold text-2xl text-center">
                Nenhum produto encontrado.
              </span>
              <Link
                to="/"
                className="rounded-[62px] border px-8 py-4 text-center hover:bg-gray-100"
              >
                Voltar para a página inicial
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
