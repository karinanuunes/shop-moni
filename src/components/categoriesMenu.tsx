import { Link } from "react-router-dom";
import casual from "../assets/categories/casual.png";
import formal from "../assets/categories/formal.png";
import festa from "../assets/categories/festa.png";
import esportivo from "../assets/categories/esportivo.png";

const CategoriesMenu = () => {
  return (
    <div className="bg-[#f0f0f0] rounded-[40px] max-w-[1240px] m-auto p-16 flex flex-col gap-16">
      <h2 className="font-extrabold text-5xl text-center">
        PROCURE PELO ESTILO
      </h2>
      <div className="flex flex-wrap gap-5">
        <Link to={`/category/casual`} className="relative">
          <img src={casual} alt="Casual" className="rounded-[40px]" />
          <span className="font-bold text-3xl absolute left-9 top-6">
            Casual
          </span>
        </Link>
        <Link to={`/category/formal`} className="relative">
          <img src={formal} alt="Formal" className="rounded-[40px]" />
          <span className="font-bold text-3xl absolute left-9 top-6">
            Formal
          </span>
        </Link>
        <Link
          to={`/category/party`}
          className="w-[684px]  rounded-[40px] relative bg-white flex justify-end"
        >
          <img src={festa} alt="Festa" className="rounded-[40px]" />
          <span className="font-bold text-3xl absolute left-9 top-6">
            Festa
          </span>
        </Link>
        <Link
          to={`/category/sports`}
          className="w-[407px] rounded-[40px] relative bg-white flex justify-end"
        >
          <img src={esportivo} alt="Esportivo" className="rounded-[40px]" />
          <span className="font-bold text-3xl absolute left-9 top-6">
            Esportivo
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesMenu;
