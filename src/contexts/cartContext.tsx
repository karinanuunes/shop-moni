import { createContext, ReactNode, useCallback, useState } from "react";
import { IProduct } from "../types/IProduct";

export interface ICartProduct extends IProduct {
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
  const [cart, setCart] = useState<ICartProduct[]>([]);

  const addProduct = useCallback(
    (product: ICartProduct) => {
      const productOnCart = cart.some((item) => item.id === product.id);

      if (productOnCart) {
        setCart((prevCart) => {
          return prevCart.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + product.quantity };
            }
            return item;
          });
        });
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
