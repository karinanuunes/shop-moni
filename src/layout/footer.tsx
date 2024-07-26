import SubscribeEmail from "../components/subscribeEmail";
import { Link } from "react-router-dom";
import { socialMedias } from "../data/socialMedias";
import { links } from "../data/footerLinkes";
import { paymentsMethods } from "../data/paymentsMethods";

const Footer = () => {
  return (
    <footer className="relative mt-[220px]">
      <div className="absolute top-[-132px] left-1/2 transform -translate-x-1/2 w-full">
        <SubscribeEmail />
      </div>
      <div className="bg-[#f0f0f0] flex flex-col items-center py-20 pt-48">
        <div className="w-[1240px] flex justify-between mb-6">
          <div className="flex flex-col gap-6 max-w-60">
            <h3 className="text-4xl font-extrabold tracking-tighter">
              MONI Shop
            </h3>
            <p className="text-gray-600">
              Temos roupas que combinam com o seu estilo e que você tem orgulho
              de usar. De mulheres para homens.
            </p>
            <div className="flex gap-3">
              {socialMedias.map((socialMedia, index) => (
                <Link
                  to={socialMedia.link}
                  className="rounded-full w-7 h-7 border border-gray-400 flex justify-center items-center hover:bg-white"
                  key={index}
                >
                  <img
                    src={socialMedia.icon}
                    alt={socialMedia.alt}
                    className="w-7 h-7 rounded-full p-1.5"
                    style={
                      socialMedia.alt === "Ícone do Facebook"
                        ? {
                            backgroundColor: "black",
                            padding: "7px",
                          }
                        : {}
                    }
                  />
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([category, linksArray], index) => (
            <div className="flex flex-col gap-6" key={index}>
              <span className="font-semibold tracking-widest">
                {category.toUpperCase()}
              </span>
              {linksArray.map((linkItem, index) => (
                <Link
                  to={linkItem.link}
                  className="text-gray-600 hover:text-black"
                  key={index}
                >
                  {linkItem.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t-2 w-[1240px] my-6"></div>
        <div className="w-[1240px] flex justify-between items-center">
          <span className="text-gray-600 text-sm">
            MONI Shop © 2024, Todos os Direitos Reservados
          </span>
          <div className="flex gap-3">
            {paymentsMethods.map((payment, index) => (
              <img src={payment.icon} alt={payment.alt} key={index} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
