import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IProduct } from "../types/IProduct";

export interface ICartProduct extends IProduct {
  color: string;
  size: string;
  quantity: number;
}

interface ICartContext {
  cart: ICartProduct[];
  addProduct: (product: ICartProduct) => void;
  removeProduct: (product: ICartProduct) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  const [cart, setCart] = useState<ICartProduct[]>(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addProduct = useCallback(
    (product: ICartProduct) => {
      const existingProductIndex = cart.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (existingProductIndex !== -1) {
        setCart((prevCart) =>
          prevCart.map((item, index) => {
            if (index === existingProductIndex) {
              return {
                ...item,
                quantity: item.quantity + product.quantity,
              };
            }
            return item;
          })
        );
      } else {
        setCart((prevCart) => [...prevCart, product]);
      }
    },
    [cart]
  );

  const removeProduct = useCallback((product: ICartProduct) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
