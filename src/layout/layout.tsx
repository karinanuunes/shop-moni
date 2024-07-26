import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="max-w-7xl m-auto">
        {" "}
        <div className="border-t max-w-7xl m-auto"></div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
