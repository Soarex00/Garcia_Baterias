export default function About() {
  return (
    <>
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#002D72]">
              Sobre Nós
            </h2>
            <div className="w-24 h-1 bg-[#FDC21C] mx-auto mt-4 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Somos especialistas em baterias automotivas em Pelotas, oferecendo
            produtos de qualidade superior com entrega rápida e instalação
            profissional incluída.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Nossa missão é garantir que você nunca fique na mão. Com nosso
            serviço expresso de{" "}
            <span className="font-semibold text-blue-700">49 minutos</span>,
            estamos sempre prontos para atender você quando mais precisar.
          </p>
        </div>
      </section>
    </>
  );
}
