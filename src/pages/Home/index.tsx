import Banner from "../../components/banner";
import CategoriesMenu from "../../components/categoriesMenu";
import CustomersFeedbacks from "../../components/customersFeedbacks";
import ShoppingList from "../../components/shopping-list";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { handleErrorMessage } from "../../utils/handleErrorMessage";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ShoppingList title="COLEÇÃO NOVA" status="Nova coleção" />
      <div className="flex justify-center items-center p-14">
        <button
          className="border rounded-[62px] px-14 py-4 font-medium"
          onClick={handleErrorMessage}
        >
          Ver Todos
        </button>
      </div>
      <div className="border-t max-w-7xl m-auto"></div>
      <ShoppingList title="MAIS VENDIDOS" status="Mais vendidos" />
      <div className="flex justify-center items-center p-14">
        <button
          className="border rounded-[62px] px-14 py-4 font-medium"
          onClick={handleErrorMessage}
        >
          Ver Todos
        </button>
      </div>
      <CategoriesMenu />
      <CustomersFeedbacks />
      <Footer />
    </>
  );
};

export default Home;
