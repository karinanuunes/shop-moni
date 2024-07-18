import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"; // Import the useState function
import Header from "../../components/header";
import arrowRight from "../../assets/right.svg";
import databaseJSON from "../../database.json";
import { ratingStars } from "../../utils/ratingStars";
import { formatPrice } from "../../utils/formatPrice";
import { formatDiscount } from "../../utils/formatDiscount";
import { CartContext, ICartProduct } from "../../contexts/cartContext";
import ProductReviews from "./components/productReviews";
import ShoppingList from "../../components/shopping-list";
import { handleErrorMessage } from "../../utils/handleErrorMessage";
import Footer from "../../components/footer";

const ProductDetail = () => {
  const database = databaseJSON.products;
  const getId = window.location.pathname.split("/").pop() ?? "";
  const productId = parseInt(getId, 10);
  const product = database.find((product) => product.id === productId);

  const [quantity, setQuantity] = useState(1);
  const { addProduct, cart } = useContext(CartContext);

  useEffect(() => {}), [cart];

  const addToCart = () => {
    const productToAdd = { ...product, quantity } as ICartProduct;
    addProduct(productToAdd);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDiscQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) {
    // TODO: Create a 404 page
    return (
      <>
        <Header />
        <p className="text-center">Produto não encontrado.</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="border-t max-w-7xl m-auto"></div>
      <nav className="flex items-center gap-1.5 max-w-7xl m-auto py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/produtos">Produtos</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/produtos/masculino">Masculino</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link
          to={`/produtos/${product.category.toLowerCase()}`}
          className="text-black"
        >
          {product.category}
        </Link>
      </nav>
      <main className="flex gap-10 max-w-7xl m-auto">
        <div className="flex gap-3.5">
          <div className="flex flex-col gap-3">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagem do produto ${product.name}`}
                className="w-36 h-40 rounded-[20px] object-cover"
              />
            ))}
          </div>
          <img
            src={product.imageURL}
            alt={`Imagem do produto ${product.name}`}
            className="w-[434px] h-[504px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 max-w-prose">
          <h1 className="text-4xl font-extrabold">
            {product.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex">{ratingStars(product.rating)}</div>
            <span>
              {product.rating}/<span className="text-gray-600">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-3xl">
              {formatPrice(product.updatedPrice)}
            </span>
            {product.discount > 0 && (
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-3xl text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <div className="bg-[#FF333310] px-3.5 py-1.5 rounded-[62px]">
                  <span className="font-medium text-[#FF3333]">
                    {formatDiscount(product.discount)}
                  </span>
                </div>
              </div>
            )}
          </div>
          <span className="text-gray-500">{product.description}</span>
          <div className="border-t max-w-prose"></div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500">Selecione a Cor</span>
            <div className="flex gap-4">
              {product.colors?.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
          <div className="border-t max-w-prose"></div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500">Selecione o Tamanho</span>
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-[#F0F0F0] rounded-full focus:bg-black focus:text-white">
                P
              </button>
              <button className="w-12 h-12 bg-[#F0F0F0] rounded-full focus:bg-black focus:text-white">
                M
              </button>
              <button className="w-12 h-12 bg-[#F0F0F0] rounded-full focus:bg-black focus:text-white">
                G
              </button>
              <button className="w-12 h-12 bg-[#F0F0F0] rounded-full focus:bg-black focus:text-white">
                GG
              </button>
            </div>
          </div>
          <div className="border-t max-w-prose"></div>
          <div className="flex gap-6">
            <div className="flex gap-2.5">
              <div className="flex bg-[#F0F0F0] rounded-full">
                <button className="w-12 h-12" onClick={handleDiscQuantity}>
                  -
                </button>
                <span className="w-12 h-12 flex items-center justify-center">
                  {quantity}
                </span>
                <button className="w-12 h-12" onClick={handleAddQuantity}>
                  +
                </button>
              </div>
            </div>
            <button
              className="w-full h-12 bg-black rounded-[62px] text-white"
              onClick={addToCart}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>
      <div className="max-w-7xl py-20 m-auto flex justify-around">
        <button
          className="border-b w-1/3 py-5 text-xl text-gray-600 text-center hover:text-gray-800"
          onClick={handleErrorMessage}
        >
          Detalhes do Produto
        </button>
        <button className="border-b w-1/3 py-5 border-b-black text-xl font-medium text-center">
          Avaliações & Comentários
        </button>
        <button
          className="border-b w-1/3 py-5 text-xl text-gray-600 text-center hover:text-gray-800"
          onClick={handleErrorMessage}
        >
          FAQs
        </button>
      </div>
      <ProductReviews />
      <div className="flex justify-center items-center pt-7">
        <button
          className="border px-14 py-4 rounded-[62px]"
          onClick={handleErrorMessage}
        >
          Mais Comentários
        </button>
      </div>
      <ShoppingList title="VOCÊ TAMBÉM PODE GOSTAR" status="Básicos" />
      <Footer />
    </>
  );
};

export default ProductDetail;
