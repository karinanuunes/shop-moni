import { formatPrice } from "../utils/formatPrice";
import { formatDiscount } from "../utils/formatDiscount";
import { Link } from "react-router-dom";
import { ratingStars } from "../utils/ratingStars";
import { ShoppingItemProps } from "../types/ShoppingItemProps";

const ShoppingItem = ({ product }: ShoppingItemProps) => {
  return (
    <Link to={`/produto/${product.id}`} key={product.id}>
      <div className="flex flex-col items-center gap-4 w-[295px]">
        <img
          src={product.imageURL}
          alt={product.description}
          className="w-[295px] h-[298px] object-cover rounded-[20px]"
        />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl">{product.name}</span>
          <div className="flex items-center gap-1 w-[295px]">
            <div className="flex gap-1 h-5">{ratingStars(product.rating)}</div>
            <span className="text-sm">
              {product.rating}/<span className="text-gray-400 text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl">
              {formatPrice(product.updatedPrice)}
            </span>
            {product.discount > 0 && (
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-xl text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <div className="bg-[#FF333310] px-3.5 py-1 rounded-[62px]">
                  <span className="text-xs font-medium text-[#FF3333]">
                    {formatDiscount(product.discount)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShoppingItem;
