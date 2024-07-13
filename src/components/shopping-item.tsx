import blackTShirt from "../assets/clothes/black-t-shirt.png";
import fullStar from "../assets/full-star.png";
import halfStar from "../assets/half-star.png";

const ShoppingItem = () => {
  const ratingStars = (stars: number) => {
    const starsElements = [];
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starsElements.push(<img key={i} src={fullStar} alt="Estrela cheia" />);
    }
    if (hasHalfStar) {
      starsElements.push(
        <img key="half" src={halfStar} alt="Estrela metade" />
      );
    }

    return starsElements;
  };

  return (
    <div className="flex flex-col items-center gap-4 w-[295px]">
      <img src={blackTShirt} alt="Camiseta de manga curta preta" />
      <div className="flex flex-col gap-2">
        <span className="font-bold text-xl">Camiseta com detalhes em fita</span>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex gap-1">{ratingStars(4.5)}</div>
          <span className="text-sm">
            4.5/<span className="text-gray-400 text-sm">5</span>
          </span>
        </div>
        <span className="font-bold text-2xl">R$ 120,00</span>
      </div>
    </div>
  );
};

export default ShoppingItem;
