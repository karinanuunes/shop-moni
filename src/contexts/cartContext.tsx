import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IProduct } from "../types/IProduct";
import { formatPrice } from "../utils/formatPrice";

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
  attProductQuantity: (product: ICartProduct, quantity: number) => void;
  subtotalPrice: (cart: ICartProduct[]) => string;
  totalPrice: (cart: ICartProduct[]) => string;
  totalDiscount: (cart: ICartProduct[]) => string;
  totalDiscountPercentage: (cart: ICartProduct[]) => number;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
  attProductQuantity: () => {},
  subtotalPrice: () => "",
  totalPrice: () => "",
  totalDiscount: () => "",
  totalDiscountPercentage: () => 0,
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

  const attProductQuantity = useCallback(
    (product: ICartProduct, newQuantity: number) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    },
    []
  );

  const removeProduct = useCallback((product: ICartProduct) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const subtotalPrice = (cart: ICartProduct[]) => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.originalPrice * item.quantity,
      0
    );
    return formatPrice(subtotal);
  };

  const totalPrice = (cart: ICartProduct[]) => {
    const total = cart.reduce(
      (acc, item) => acc + item.updatedPrice * item.quantity,
      0
    );
    return formatPrice(total);
  };

  const totalDiscount = (cart: ICartProduct[]) => {
    const total = cart.reduce(
      (acc, item) =>
        acc + (item.originalPrice - item.updatedPrice) * item.quantity,
      0
    );
    return formatPrice(total);
  };

  const totalDiscountPercentage = (cart: ICartProduct[]): number => {
    const totalDiscount = cart.reduce(
      (acc, item) =>
        acc + (item.originalPrice - item.updatedPrice) * item.quantity,
      0
    );
    const total = cart.reduce(
      (acc, item) => acc + item.originalPrice * item.quantity,
      0
    );

    if (total === 0) return 0;

    return parseFloat(((totalDiscount / total) * 100).toFixed(2));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        clearCart,
        attProductQuantity,
        subtotalPrice,
        totalPrice,
        totalDiscount,
        totalDiscountPercentage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
