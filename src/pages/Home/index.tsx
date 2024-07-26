import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import CategoriesMenu from "../../components/categoriesMenu";
import CustomersFeedbacks from "../../components/customersFeedbacks";
import ShoppingList from "../../components/shopping-list";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ShoppingList title="COLEÇÃO NOVA" status="Nova coleção" />
      <div className="flex justify-center items-center p-14">
        <Link
          className="border rounded-[62px] px-14 py-4 font-medium"
          to={"/colecao-nova"}
        >
          Ver Todos
        </Link>
      </div>
      <div className="border-t max-w-7xl m-auto"></div>
      <ShoppingList title="MAIS VENDIDOS" status="Mais vendidos" />
      <div className="flex justify-center items-center p-14">
        <Link
          className="border rounded-[62px] px-14 py-4 font-medium"
          to={"/produtos"}
        >
          Ver Todos
        </Link>
      </div>
      <CategoriesMenu />
      <CustomersFeedbacks />
      <Footer />
    </>
  );
};

export default Home;
