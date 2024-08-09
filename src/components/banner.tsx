import smallStar from "/assets/small-star.svg";
import bigStar from "/assets/big-star.svg";
import versace from "/assets/logos/versace-logo.png";
import zara from "/assets/logos/zara-logo.png";
import gucci from "/assets/logos/gucci-logo.png";
import prada from "/assets/logos/prada-logo.png";
import calvinKlein from "/assets/logos/calvin-klein-logo.png";

const Banner = () => {
  return (
    <main>
      <div className="h-[663px] bg-banner-image bg-[#F2F0F1] bg-right bg-no-repeat flex">
        <div className="w-1/2 flex justify-center pt-14">
          <div className="max-w-[550px] flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl font-extrabold">
                ENCONTRE ROUPAS QUE COMBINEM COM SEU ESTILO
              </h1>
              <p className="font-light">
                Navegue por nossa diversificada linha de roupas meticulosamente
                elaboradas, projetadas para realçar sua individualidade e
                atender ao seu senso de estilo.
              </p>
              <button className="bg-black text-white rounded-[62px] px-14 py-4 w-60">
                Compre Agora
              </button>
            </div>
            <div className="flex gap-8">
              <div className="border-r">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm font-light">Marcas Internacionais</p>
              </div>
              <div className="border-r">
                <p className="text-3xl font-bold">2.000+</p>
                <p className="text-sm font-light">Produtos de alta qualidade</p>
              </div>
              <div>
                <p className="text-3xl font-bold">30.000+</p>
                <p className="text-sm font-light">Consumidores satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            src={smallStar}
            alt="Estrela de tamanho pequeno"
            className="absolute top-1/2 left-40"
          />
          <img
            src={bigStar}
            alt="Estrela de tamanho grande"
            className="absolute top-32 right-10"
          />
        </div>
      </div>
      <div className="bg-black flex items-center justify-center gap-24 py-8">
        <img src={versace} alt="Logo da Versace" />
        <img src={zara} alt="Logo da Zara" />
        <img src={gucci} alt="Logo da Gucci" />
        <img src={prada} alt="Logo da Prada" />
        <img src={calvinKlein} alt="Logo da Calvin Klein" />
      </div>
    </main>
  );
};

export default Banner;
