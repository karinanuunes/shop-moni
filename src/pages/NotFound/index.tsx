import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="py-16 flex flex-col items-center gap-6">
      <span className="text-5xl font-bold">Ops!</span>
      <span className="text-3xl font-bold">Essa página não existe.</span>
      <Link
        to="/"
        className="rounded-[62px] border px-8 py-4 hover:bg-gray-100"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
