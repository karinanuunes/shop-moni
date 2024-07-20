import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import arrowRight from "../../assets/right.svg";
import { useContext } from "react";
import { CartContext, ICartProduct } from "../../contexts/cartContext";
import { formatFirstLetterToUpperCase } from "../../utils/formatFirstLetterToUpperCase";
import { formatPrice } from "../../utils/formatPrice";
import exclude from "../../assets/exclude.svg";
import ProductQuantityCounter from "../../components/productQuantityCounter";
import discountTag from "../../assets/discount-tag.svg";
import arrowRightWhite from "../../assets/arrow-right-white.svg";
import { handleErrorMessage } from "../../utils/handleErrorMessage";

const ShoppingCart = () => {
  const {
    cart,
    attProductQuantity,
    removeProduct,
    subtotalPrice,
    totalPrice,
    totalDiscount,
    totalDiscountPercentage,
  } = useContext(CartContext);

  const handleAddQuantity = (product: ICartProduct) => {
    const newQuantity = product.quantity + 1;
    if (newQuantity > 0) attProductQuantity(product, newQuantity);
  };

  const handleDiscQuantity = (product: ICartProduct) => {
    const newQuantity = product.quantity - 1;
    if (newQuantity > 0) attProductQuantity(product, newQuantity);
    else if (newQuantity == 0)
      alert("Para excluir o produto, clique no ícone de lixeira");
  };

  const handlePromoCode = () => {
    alert("Cupom inválido");
  };

  return (
    <>
      <Header />
      <div className="border-t max-w-7xl m-auto"></div>
      <nav className="flex items-center gap-1.5 max-w-7xl m-auto py-6 text-gray-600">
        <Link to="/">Início</Link>
        <img src={arrowRight} alt="Seta para direita" />
        <Link to="/carrinho">Carrinho</Link>
      </nav>
      <div className="max-w-7xl m-auto flex gap-5">
        <div className="w-[715px] border rounded-[20px] py-5 px-6 flex flex-col gap-6">
          {cart.map((product, index) => (
            <div key={product.id} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <img
                  src={product.imageURL}
                  alt={`Imagem do produto ${product.name}`}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex justify-between w-[520px]">
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col">
                      <h2 className="text-xl font-bold">{product.name}</h2>
                      <span className="text-sm">
                        Tamanho:{" "}
                        <span className="text-sm text-gray-600">
                          {product.size}
                        </span>
                      </span>
                      <span className="text-sm">
                        Cor:{" "}
                        <span className="text-sm text-gray-600">
                          {formatFirstLetterToUpperCase(product.color)}
                        </span>
                      </span>
                    </div>
                    <p className="text-2xl font-bold">
                      {formatPrice(product.updatedPrice * product.quantity)}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <button onClick={() => removeProduct(product)}>
                      <img src={exclude} alt="Ícone de lixeira" />
                    </button>
                    <ProductQuantityCounter
                      quantity={product.quantity}
                      handleAddQuantity={() => handleAddQuantity(product)}
                      handleDiscQuantity={() => handleDiscQuantity(product)}
                      className="w-10 h-11"
                    />
                  </div>
                </div>
              </div>
              {cart.length != index + 1 && <div className="border-b"></div>}
            </div>
          ))}
        </div>
        <div className="border rounded-[20px] w-[505px] h-fit py-5 px-6 flex flex-col gap-6">
          <h2 className="font-bold text-2xl">Resumo do Pedido</h2>
          <div className="flex justify-between">
            <span className="text-gray-600 text-xl">Subtotal</span>
            <span className="font-bold text-xl">{subtotalPrice(cart)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-xl">
              Descontos (-{totalDiscountPercentage(cart)}%)
            </span>
            <span className="font-bold text-xl">{totalDiscount(cart)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-xl">Frete</span>
            <span className="font-bold text-xl">Grátis</span>
          </div>
          <div className="border-b"></div>
          <div className="flex justify-between">
            <span className="text-xl">Total</span>
            <span className="font-bold text-xl">{totalPrice(cart)}</span>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#F0F0F0] py-3 px-4 flex gap-3 rounded-[62px] w-full">
              <img src={discountTag} alt="Ícone de tag de desconto" />
              <input
                type="text"
                className="bg-[#F0F0F0] w-full outline-none text-sm"
                placeholder="Adicione o cupom de desconto"
                onKeyDown={handlePromoCode}
              />
            </div>
            <button
              className="bg-black text-white rounded-[62px] py-3 px-6"
              type="submit"
              onClick={handlePromoCode}
            >
              Aplicar
            </button>
          </div>
          <button
            className="bg-black text-white font-semibold flex justify-center py-4 px-14 gap-3 rounded-[62px] mb-3"
            onClick={handleErrorMessage}
          >
            Finalizar Compra{" "}
            <img src={arrowRightWhite} alt="Seta para direita" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
