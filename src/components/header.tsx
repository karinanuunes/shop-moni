import arrowDown from "../assets/arrow-down.svg";
import search from "../assets/search.svg";
import cartImg from "../assets/cart.svg";
import user from "../assets/user.svg";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import database from "../database.json";
import { CartContext } from "../contexts/cartContext";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState("");
  const { cart } = useContext(CartContext);
  const [shoppingCart, setShoppingCart] = useState<number | null>(null);

  useEffect(() => {
    setShoppingCart(cart.length);
  }, [cart.length]);

  const handleIsProductsOpen = () => {
    setIsProductsOpen(true);
  };

  const handleIsProductsClose = () => {
    setIsProductsOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(event.target.value);
  };

  const handleSearchPage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      window.location.href = `/procura?produto=${isSearch.toLowerCase()}`;
    }
  };

  const categories: string[] = [];
  database.products.map((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });

  return (
    <header>
      <div className="bg-black text-white p-2 flex items-center justify-center gap-1 text-sm">
        <span>Cadastre-se e ganhe 20% de desconto na sua primeira compra.</span>
        <a href="/" className="font-medium underline decoration-solid">
          Cadastre-se Agora
        </a>
      </div>
      <div className="flex items-center justify-center gap-10 p-6">
        <h3 className="text-4xl font-extrabold tracking-tighter">MONI</h3>
        <nav>
          <ul className="flex items-center gap-6 relative">
            <li>
              <button
                onMouseEnter={handleIsProductsOpen}
                onMouseLeave={handleIsProductsClose}
                className="flex flex-col items-center gap-1"
              >
                <Link to="/produtos" className="flex gap-1">
                  Produtos <img src={arrowDown} alt="Seta para baixo" />
                </Link>
                {isProductsOpen ? (
                  <ul className="absolute top-3 left-0 mt-3 w-full bg-white shadow-lg rounded-lg">
                    {categories.sort().map((product, index) => (
                      <Link
                        to={`/produtos/${product.toLowerCase()}`}
                        key={index}
                      >
                        <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                          {product}
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </button>
            </li>
            <li>
              <Link to="/promocao">Promoção</Link>
            </li>
            <li>
              <Link to="/colecao-nova">Coleção Nova</Link>
            </li>
            <li>
              <Link to="/marcas">Marcas</Link>
            </li>
          </ul>
        </nav>
        <div className="relative bg-gray-50 flex items-center gap-3 px-4 py-3 rounded-[62px] w-[577px]">
          <img src={search} alt="Lupa" />
          <input
            type="text"
            className="bg-transparent w-full outline-none"
            placeholder="Procure por produtos..."
            onChange={handleSearchChange}
            value={isSearch}
            onKeyDown={handleSearchPage}
          />
          {isSearch ? (
            <ul className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
              <Link to={`/procura?produto=${isSearch.toLowerCase()}`}>
                <li className="px-4 py-2 text-sm text-left w-full hover:bg-gray-50">
                  Procurar por: {isSearch}
                </li>
              </Link>
              {database.products.map((product, index) => {
                if (
                  product.name.toLowerCase().includes(isSearch.toLowerCase())
                ) {
                  return (
                    <Link
                      key={index}
                      to={`/produto/${product.id}`}
                      className="w-full"
                    >
                      <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                        {product.name}
                      </li>
                    </Link>
                  );
                }
              })}
            </ul>
          ) : (
            ""
          )}
          {isSearch ? (
            <button onClick={() => setIsSearch("")} className="text-xs">
              Limpar
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-3">
          <Link to="/carrinho" className="relative">
            <img src={cartImg} alt="Imagem de carrinho de compras" />
            {shoppingCart != null && (
              <div className="absolute -top-1.5 -right-1.5 bg-red-600 rounded-full text-white w-4 h-4 flex justify-center items-center">
                <span className="text-xs">{shoppingCart}</span>
              </div>
            )}
          </Link>
          <Link to="/usuario">
            <img src={user} alt="Imagem de usuário" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
