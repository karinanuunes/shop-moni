interface ProductQuantityCounterProps {
  quantity: number;
  handleAddQuantity: () => void;
  handleDiscQuantity: () => void;
  className: string;
}

const ProductQuantityCounter = ({
  handleAddQuantity,
  handleDiscQuantity,
  quantity,
  className,
}: ProductQuantityCounterProps) => {
  return (
    <div className="flex gap-2.5">
      <div className="flex bg-[#F0F0F0] rounded-full">
        <button className={className} onClick={handleDiscQuantity}>
          -
        </button>
        <span className={`${className} flex items-center justify-center`}>
          {quantity}
        </span>
        <button className={className} onClick={handleAddQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantityCounter;
