import fullStar from "../assets/full-star.png";
import halfStar from "../assets/half-star.png";

export const ratingStars = (stars: number) => {
  const starsElements = [];
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starsElements.push(<img key={i} src={fullStar} alt="Estrela cheia" />);
  }
  if (hasHalfStar) {
    starsElements.push(<img key="half" src={halfStar} alt="Estrela metade" />);
  }

  return starsElements;
};
