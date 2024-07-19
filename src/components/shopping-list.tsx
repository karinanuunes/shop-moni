import { ShoppingListProps } from "../types/ShoppingListProps";
import ShoppingItem from "./shopping-item";
import databaseJSON from "../database.json";

const ShoppingList = ({ title, status }: ShoppingListProps) => {
  const database = databaseJSON.products;
  const filteredProducts = database.filter(
    (product) => product.status === status
  );
  const limitedProducts = filteredProducts.slice(0, 4);

  return (
    <section className="flex flex-col items-center pt-14 gap-14">
      <h2 className="font-extrabold text-5xl">{title}</h2>
      <div className="flex gap-5">
        {limitedProducts.map((product) => (
          <ShoppingItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShoppingList;
