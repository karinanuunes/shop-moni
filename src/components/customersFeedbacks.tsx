import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";
import { ratingStars } from "../utils/ratingStars";
import verified from "../assets/verified.svg";
import { useState } from "react";
import { customersFeedback } from "../data/customersFeedback";
import { IFeedback } from "../types/IFeedback";

const CustomersFeedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : customersFeedback.length - 3
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < customersFeedback.length - 3 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center my-20 gap-10">
      <div className="flex justify-between w-[1240px]">
        <h2 className="font-extrabold text-5xl text-center">
          NOSSOS CLIENTES SATISFEITOS
        </h2>
        <div className="flex items-end gap-2">
          <img
            src={leftArrow}
            alt="Seta para esquerda"
            onClick={handleLeftClick}
            className="cursor-pointer"
          />
          <img
            src={rightArrow}
            alt="Seta para direita"
            onClick={handleRightClick}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="relative flex gap-5 overflow-hidden w-[1240px]">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (400 + 20)}px)` }}
        >
          {customersFeedback.map((feedback: IFeedback, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col gap-4 px-8 py-7 w-[400px] rounded-[20px] border border-gray-300"
            >
              <div className="flex gap-1.5">{ratingStars(5)}</div>
              <div className="flex gap-1.5">
                <span className="font-bold text-xl">{feedback.name}</span>
                <img src={verified} alt="Sinal de verificado(a)" />
              </div>
              <p className="text-gray-600">{feedback.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersFeedbacks;
