import databaseJSON from "../../../database.json";
import filter from "/assets/filter.svg";
import arrowDown from "/assets/arrow-down.svg";
import verified from "/assets/verified.svg";
import { ratingStars } from "../../../utils/ratingStars";
import { formatDate } from "../../../utils/formatDate";
import dots from "/assets/dots.svg";
import { useState } from "react";
import { handleErrorMessage } from "../../../utils/handleErrorMessage";

const ProductReviews = () => {
  const database = databaseJSON.products;
  const getId = window.location.pathname.split("/").pop() ?? "";
  const productId = parseInt(getId, 10);
  const product = database.find((product) => product.id === productId);
  const [aboutComment, setAboutComment] = useState<number | null>(null);

  const handleAboutComment = (index: number) => {
    setAboutComment(aboutComment === index ? null : index);
  };

  return (
    <section className="py-5">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-2xl">Todos os comentários</h4>
          <span className="text-gray-600">({product?.reviews?.length})</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="bg-[#F0F0F0] rounded-[62px] p-2"
            onClick={handleErrorMessage}
          >
            <img src={filter} alt="Ícone de filtro" />
          </button>
          <button
            className="bg-[#F0F0F0] rounded-[62px] px-5 py-2 flex items-center gap-3 font-medium"
            onClick={handleErrorMessage}
          >
            Recentes
            <img src={arrowDown} alt="Ícone de seta para baixo" />
          </button>
          <button
            className="button bg-black text-white px-5 py-2"
            onClick={handleErrorMessage}
          >
            Escreva um Comentário
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {product?.reviews?.map((review, index) => (
          <div
            key={index}
            className="flex flex-col border px-7 py-8 gap-4 max-w-[630px] rounded-[20px]"
          >
            <div className="h-5 flex justify-between items-center relative">
              <div className="flex gap-1.5">
                {ratingStars(product.reviews[index].rating)}
              </div>
              <button onClick={() => handleAboutComment(index)}>
                <img src={dots} alt="Ícone de reticências" />
              </button>
              {aboutComment === index && (
                <div className="absolute bg-white border border-gray-300 flex flex-col rounded-[10px] shadow-md top-6 right-0 w-fit">
                  <button
                    className="text-gray-600 hover:bg-gray-200 px-3 py-2 text-sm"
                    onClick={handleErrorMessage}
                  >
                    Denunciar
                  </button>
                  <button
                    className="text-gray-600 hover:bg-gray-200 px-3 py-2 text-sm"
                    onClick={handleErrorMessage}
                  >
                    Responder
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-1">
              <h5 className="font-bold text-lg">{review.name}</h5>
              <img src={verified} alt="Sinal de verificado(a)" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-600">{review.comment}</span>
            </div>
            <span className="text-gray-600 font-medium">
              Postado em {formatDate(review.date)}
            </span>
          </div>
        ))}
      </div>
      {product?.reviews?.length ?? 0 > 5 ? (
        <div className="flex justify-center items-center pt-7">
          <button className="button px-14 py-4" onClick={handleErrorMessage}>
            Mais Comentários
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default ProductReviews;
