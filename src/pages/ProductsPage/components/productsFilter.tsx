import { useState } from "react";
import arrowUp from "../../../assets/arrow-up.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import databaseJSON from "../../../database.json";
import filter from "../../../assets/filter.svg";
import arrowRight from "../../../assets/right.svg";
import PriceFilter from "./priceFilter";
import ShoppingItem from "../../../components/shopping-item";

export interface UserProductsFilter {
  categories: string[];
  priceRange: number[];
  colors: string[];
  sizes: string[];
  dressStyles: string[];
}

const ProductsFilter = () => {
  const database = databaseJSON.products;
  const [hidePriceFilter, setHidePriceFilter] = useState(false);
  const [hideColors, setHideColors] = useState(false);
  const [hideSizes, setHideSizes] = useState(false);
  const [hideDressStyles, setHideDressStyles] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([
    50, 500,
  ]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedDressStyles, setSelectedDressStyles] = useState<string[]>([]);

  const [filteredProducts, setFilteredProducts] = useState(database);

  const categories: string[] = [];
  database.map((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });

  const colors: string[] = [];
  database.map((product) => {
    product.colors.map((color) => {
      if (!colors.includes(color)) colors.push(color);
    });
  });

  const sizes = ["P", "M", "G", "GG"];
  const dressStyles = ["Casual", "Esportivo", "Social", "Festa"];

  const handleHideFilter = () => setHidePriceFilter(!hidePriceFilter);
  const handleHideColors = () => setHideColors(!hideColors);
  const handleHideSizes = () => setHideSizes(!hideSizes);
  const handleHideDressStyles = () => setHideDressStyles(!hideDressStyles);

  const handleSelectedCategories = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSelectedPrices = (values: number[]) =>
    setSelectedPriceRange(values);

  const handleSelectedColors = (colors: string) => {
    setSelectedColors((prev) =>
      prev.includes(colors)
        ? prev.filter((item) => item !== colors)
        : [...prev, colors]
    );
  };

  const handleSelectedSizes = (sizes: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sizes)
        ? prev.filter((item) => item !== sizes)
        : [...prev, sizes]
    );
  };

  const handleSelectedDressStyles = (categories: string) => {
    setSelectedDressStyles((prev) =>
      prev.includes(categories)
        ? prev.filter((item) => item !== categories)
        : [...prev, categories]
    );
  };

  const filterProducts = (filter: UserProductsFilter) => {
    const { categories, priceRange, colors, dressStyles } = filter;

    const filtered = database.filter((product) => {
      const categoryMatch =
        categories.length === 0 || categories.includes(product.category);
      const priceMatch =
        priceRange.length === 0 ||
        (product.updatedPrice >= priceRange[0] &&
          product.updatedPrice <= priceRange[1]);
      const colorMatch =
        colors.length === 0 ||
        colors.some((color) => product.colors.includes(color));
      const dressStyleMatch =
        dressStyles.length === 0 ||
        (product.styles &&
          dressStyles.some((style) => product.styles.includes(style)));

      return categoryMatch && priceMatch && colorMatch && dressStyleMatch;
    });

    setFilteredProducts(filtered);
  };

  const handleApplyFilters = () => {
    const userProductsFilter: UserProductsFilter = {
      categories: selectedCategories,
      priceRange: selectedPriceRange,
      colors: selectedColors,
      sizes: selectedSizes,
      dressStyles: selectedDressStyles,
    };

    filterProducts(userProductsFilter);
  };

  return (
    <main className="flex gap-10">
      <div className="w-[300px] border rounded-[20px] py-5 px-6 flex flex-col gap-6 h-fit">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">Filtros</h3>
          <img src={filter} alt="Ícone de filtro" />
        </div>
        <div className="border-b"></div>
        <div className="text-gray-600 flex flex-col gap-3">
          {categories.sort().map((category) => (
            <button
              className={`flex justify-between ${
                selectedCategories.includes(category) &&
                "text-black font-semibold"
              }`}
              key={category}
              onClick={() => handleSelectedCategories(category)}
            >
              {category}
              <img src={arrowRight} alt="Seta para direita" />
            </button>
          ))}
        </div>
        <div className="border-b"></div>
        <button onClick={handleHideFilter}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Preço</h3>
            <img
              src={hidePriceFilter ? arrowDown : arrowUp}
              alt="Ícone de filtro"
            />
          </div>
        </button>
        <PriceFilter
          min={50}
          max={500}
          step={1}
          onChange={handleSelectedPrices}
          hidePriceFilter={hidePriceFilter}
        />
        <div className="border-b"></div>
        <button onClick={handleHideColors}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Cores</h3>
            <img src={hideColors ? arrowDown : arrowUp} alt="Ícone de filtro" />
          </div>
        </button>
        <div className={`flex flex-wrap gap-4 ${hideColors ? "hidden" : ""}`}>
          {colors.map((color) => (
            <button
              key={color}
              style={{ background: color }}
              className={`w-9 h-9 rounded-full border border-gray-200 ${
                selectedColors.includes(color) && "border-gray-950 border-2"
              }`}
              onClick={() => handleSelectedColors(color)}
            ></button>
          ))}
        </div>
        <div className="border-b"></div>
        <button onClick={handleHideSizes}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Tamanhos</h3>
            <img src={hideSizes ? arrowDown : arrowUp} alt="Ícone de filtro" />
          </div>
        </button>
        <div className={`flex flex-wrap gap-2 ${hideSizes ? "hidden" : ""}`}>
          {sizes.map((size) => (
            <button
              key={size}
              className={`rounded-[62px] bg-[#F0F0F0] py-2.5 px-4 ${
                selectedSizes.includes(size) && "bg-black text-white"
              }`}
              onClick={() => {
                handleSelectedSizes(size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="border-b"></div>
        <button onClick={handleHideDressStyles}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Estilos</h3>
            <img
              src={hideDressStyles ? arrowDown : arrowUp}
              alt="Ícone de filtro"
            />
          </div>
        </button>
        <div
          className={`text-gray-600 flex flex-col gap-3 ${
            hideDressStyles ? "hidden" : ""
          }`}
        >
          {dressStyles.sort().map((category) => (
            <button
              className={`flex justify-between ${
                selectedDressStyles.includes(category) &&
                "font-semibold text-black"
              }`}
              key={category}
              onClick={() => {
                handleSelectedDressStyles(category);
              }}
            >
              {category}
              <img src={arrowRight} alt="Seta para direita" />
            </button>
          ))}
        </div>
        <button
          className="bg-black text-white w-full rounded-[62px] py-4 px-14 mb-2.5"
          onClick={handleApplyFilters}
        >
          Aplicar Filtros
        </button>
      </div>
      <div className="flex flex-col gap-4 w-[925px]">
        <div className="flex flex-wrap justify-between">
          <h4 className="font-bold text-2xl">
            {selectedDressStyles.length > 0 ? selectedDressStyles : "Produtos"}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">
              Exibindo {filteredProducts.length > 0 ? 1 : 0}-
              {filteredProducts.length} de {filteredProducts.length} Resultados
            </span>
            <div>
              <span className="text-gray-600">Ordenar por:</span>
              <select className="font-medium cursor-pointer outline-none">
                <option value="Mais recentes">Mais recentes</option>
                <option value="Menor preço">Menor preço</option>
                <option value="Maior preço">Maior preço</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          {filteredProducts.map((product) => (
            <div className="mb-4" key={product.id}>
              <ShoppingItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsFilter;
