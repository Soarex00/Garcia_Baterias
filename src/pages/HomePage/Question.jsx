import { FaWhatsapp } from "react-icons/fa";

export default function Question() {
  return (
    <>
      <section
        className="bg-[#eeeeeee1] rounded-md md:ml-15 md:mr-15 relative overflow-hidden 
py-8 md:py-12 lg:py-16 
flex flex-col md:flex-row items-center gap-8"
      >
        <div>
          <img
            src="./public/imagemQuestion.png"
            alt=""
            className="w-full h-90 object-contain"
          />
        </div>
        <div className="">
          <h2 className="text-2xl md:text-2xl font-bold text-[#002D72] mb-2">
            Procurando outros modelos?
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-[#000000] mb-4">
            Baterias para veículos pesados
          </h1>
          <p className="mb-5">Baterias estácionarias, para nobreak, motos ou náuticas?</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => {
                const msg = "Olá! Quero fazer um pedido.";
                window.open(
                  `https://wa.me/5553999023805?text=${encodeURIComponent(msg)}`,
                  "_blank",
                );
              }}
              className="bg-[#FDC21C] text-black font-bold py-4 px-10 rounded-2xl 
                         shadow-md hover:brightness-95 transition-all 
                         flex items-center justify-center gap-3
                         text-lg"
            >
              <FaWhatsapp className="text-2xl" />
              CONSULTE AGORA
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
