import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import arrowRight from "../../assets/right.svg";
import databaseJSON from "../../database.json";
import { ratingStars } from "../../utils/ratingStars";
import { formatPrice } from "../../utils/formatPrice";
import { formatDiscount } from "../../utils/formatDiscount";
import { CartContext, ICartProduct } from "../../contexts/cartContext";
import ProductReviews from "./components/productReviews";
import ShoppingList from "../../components/shopping-list";
import { handleErrorMessage } from "../../utils/handleErrorMessage";
import { IProduct } from "../../types/IProduct";
import ProductQuantityCounter from "../../components/productQuantityCounter";
import NotFoundPage from "../NotFound";

const ProductDetail = () => {
  const database = databaseJSON.products;
  const getId = window.location.pathname.split("/").pop() ?? "";
  const productId = parseInt(getId, 10);
  const product = database.find((product) => product.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const { addProduct } = useContext(CartContext);

  const addToCart = () => {
    if (!color) {
      alert("Selecione cor desejada");
      return;
    }
    if (!size) {
      alert("Selecione tamanho desejado");
      return;
    }

    const productToAdd = {
      ...product,
      quantity,
      color,
      size,
    } as ICartProduct;
    addProduct(productToAdd);

    alert("Produto adicionado ao carrinho");
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDiscQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleColorSelection = (color: string) => {
    setColor(color);
  };

  const handleSizeSelection = (size: string) => {
    setSize(size);
  };

  const renderProductImages = (product: IProduct) => {
    if (product.images && product.images.length > 0) {
      return product.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagem do produto ${product.name}`}
          className="w-28 h-40 rounded-[20px] object-cover"
        />
      ));
    } else {
      return Array.from({ length: 3 }).map((_, index) => (
        <img
          key={index}
          src={product.imageURL}
          alt={`Imagem do produto ${product.name}`}
          className="w-28 h-40 rounded-[20px] object-cover"
        />
      ));
    }
  };

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <>
      <nav className="flex items-center gap-1.5 py-6 text-gray-600">
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
            {renderProductImages(product)}
          </div>
          <img
            src={product.imageURL}
            alt={`Imagem do produto ${product.name}`}
            className="w-[434px] h-[504px] object-cover rounded-[20px]"
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
              {product.colors.map((selectSize, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border-gray-300 ${
                    color === selectSize ? "border-black border-2" : ""
                  }`}
                  style={{ backgroundColor: selectSize }}
                  onClick={() => handleColorSelection(selectSize)}
                ></button>
              ))}
            </div>
          </div>
          <div className="border-t max-w-prose"></div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-500">Selecione o Tamanho</span>
            <div className="flex gap-3">
              {["P", "M", "G", "GG"].map((selectSize) => (
                <button
                  key={selectSize}
                  className={`w-12 h-12 rounded-full ${
                    size === selectSize ? "bg-black text-white" : "bg-[#F0F0F0]"
                  } focus:bg-black focus:text-white`}
                  onClick={() => handleSizeSelection(selectSize)}
                >
                  {selectSize}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t max-w-prose"></div>
          <div className="flex gap-6">
            <ProductQuantityCounter
              handleAddQuantity={handleAddQuantity}
              handleDiscQuantity={handleDiscQuantity}
              quantity={quantity}
              className="w-12 h-12"
            />
            <button
              className="w-full h-12 bg-black rounded-[62px] text-white"
              onClick={addToCart}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>
      <div className="max-w-7xl pt-20 pb-6 m-auto flex justify-around">
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
      <ShoppingList title="VOCÊ TAMBÉM PODE GOSTAR" status={product.status} />
    </>
  );
};

export default ProductDetail;
