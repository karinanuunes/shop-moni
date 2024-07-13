import Banner from "./components/banner";
import Header from "./components/header";
import ShoppingList from "./components/shopping-list";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ShoppingList />
      <div className="border-t max-w-7xl m-auto"></div>
      <ShoppingList />
    </>
  );
}

export default App;
