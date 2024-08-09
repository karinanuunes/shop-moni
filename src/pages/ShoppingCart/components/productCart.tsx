import ProductQuantityCounter from "../../../components/productQuantityCounter";
import { formatFirstLetterToUpperCase } from "../../../utils/formatFirstLetterToUpperCase";
import { formatPrice } from "../../../utils/formatPrice";
import exclude from "/assets/exclude.svg";
import { useContext } from "react";
import { CartContext, ICartProduct } from "../../../contexts/cartContext";

const ProductCart = () => {
  const { cart, attProductQuantity, removeProduct } = useContext(CartContext);

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

  return (
    <div className="w-[715px] h-fit border rounded-[20px] py-5 px-6 flex flex-col gap-6">
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
  );
};

export default ProductCart;
