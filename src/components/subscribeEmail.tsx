import email from "/assets/email.svg";

const SubscribeEmail = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1240px] bg-black rounded-[20px] py-9 px-16 flex justify-between items-center">
        <h2 className="font-extrabold text-5xl text-white max-w-[550px]">
          MANTENHA-SE ATUALIZADO SOBRE NOSSAS ÚLTIMAS OFERTAS
        </h2>
        <form className="w-[350px]">
          <div className="flex gap-3 w-full rounded-[62px] py-3 px-4 bg-white mb-3.5">
            <img src={email} alt="Ícone de e-mail" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="w-full outline-none"
            />
          </div>
          <input
            type="submit"
            value="Se inscrever"
            className="button w-full font-semibold cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default SubscribeEmail;
