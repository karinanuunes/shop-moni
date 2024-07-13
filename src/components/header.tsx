import arrowDown from "../assets/arrow-down.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import { useState } from "react";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleIsProductsOpen = () => {
    setIsProductsOpen(true);
  };

  const handleIsProductsClose = () => {
    setIsProductsOpen(false);
  };

  return (
    <header>
      <div className="bg-black text-white p-2 flex items-center justify-center gap-1 text-sm">
        <span>Cadastre-se e ganhe 20% de desconto na sua primeira compra.</span>
        <a href="/" className="font-medium underline decoration-solid">
          Cadastre-se Agora
        </a>
      </div>
      <div className="flex items-center justify-center gap-10 p-6">
        <h3 className="text-4xl font-extrabold">MONI</h3>
        <nav>
          <ul className="flex items-center gap-6 relative">
            <li>
              <button
                onMouseEnter={handleIsProductsOpen}
                onMouseLeave={handleIsProductsClose}
                className="flex flex-col items-center gap-1"
              >
                <a href="/" className="flex gap-1">
                  Produtos <img src={arrowDown} alt="Seta para baixo" />
                </a>
                {isProductsOpen ? (
                  <ul className="absolute top-3 left-0 mt-3 w-full bg-white">
                    <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                      <a href="/">Blusas</a>
                    </li>
                    <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                      <a href="/">Camisas</a>
                    </li>
                    <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                      <a href="/">Casacos</a>
                    </li>
                    <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                      <a href="/">Shorts e bermudas</a>
                    </li>
                    <li className="px-4 py-2 text-sm text-left hover:bg-gray-50">
                      <a href="/">Calças</a>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </button>
            </li>
            <li>
              <a href="/">Promoção</a>
            </li>
            <li>
              <a href="/">Coleção Nova</a>
            </li>
            <li>
              <a href="/">Marcas</a>
            </li>
          </ul>
        </nav>
        <div className="bg-gray-50 flex items-center gap-3 px-4 py-3 rounded-[62px] w-[577px]">
          <img src={search} alt="Lupa" />
          <input
            type="text"
            className="bg-transparent w-full outline-none"
            placeholder="Procure por produtos..."
          />
        </div>
        <div className="flex gap-3">
          <img src={cart} alt="Imagem de carrinho de compras" />
          <img src={user} alt="Imagem de usuário" />
        </div>
      </div>
    </header>
  );
};

export default Header;
