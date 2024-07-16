import Banner from "../../components/banner";
import CategoriesMenu from "../../components/categoriesMenu";
import CustomersFeedbacks from "../../components/customersFeedbacks";
import Header from "../../components/header";
import ShoppingList from "../../components/shopping-list";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ShoppingList title="COLEÇÃO NOVA" status="Nova coleção" />
      <div className="border-t max-w-7xl m-auto"></div>
      <ShoppingList title="MAIS VENDIDOS" status="Mais vendidos" />
      <CategoriesMenu />
      <CustomersFeedbacks />
    </>
  );
};

export default Home;
