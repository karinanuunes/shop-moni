export const formatDate = (date: string) => {
  const [day, month, year] = date.split("-");
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return `${day} de ${months[parseInt(month) - 1]}, ${year}`;
};
