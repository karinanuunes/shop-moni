export const formatDiscount = (discount: number) => {
  discount *= 100;
  return `- ${discount}%`;
};
