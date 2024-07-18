import { ShoppingListProps } from "../types/ShoppingListProps";
import ShoppingItem from "./shopping-item";

const ShoppingList = ({ title, status }: ShoppingListProps) => {
  return (
    <section className="flex flex-col items-center pt-14 gap-14">
      <h2 className="font-extrabold text-5xl">{title}</h2>
      <div className="flex gap-5">
        <ShoppingItem status={status} />
      </div>
    </section>
  );
};

export default ShoppingList;
