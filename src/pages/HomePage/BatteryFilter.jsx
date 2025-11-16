import { Search } from "lucide-react";

export default function BatteryFilter() {
  return (
    <>
      <section className="bg-white py-12 px-6 md:px-12  shadow-lg mx-4 md:mx-12 mt-10  border-gray-200">
        <div className="max-w-3xl mx-auto text-center text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">
            Encontre a bateria ideal para o seu veículo ⚡
          </h2>
          <p className="text-gray-500">
            Digite o modelo do seu carro e veja qual bateria é mais recomendada.
          </p>

          <div className="relative max-w-xl mx-auto mt-6">
            {/* Ícone azul dentro do campo */}
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-700 h-5 w-5" />

            {/* Campo de pesquisa branco com borda azul */}
            <input
              type="text"
              placeholder="Digite o modelo do seu veículo"
              className="w-full pl-12 pr-24 py-3 rounded-xl bg-gray-50 border border-blue-300 text-gray-900 text-base shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 placeholder:text-gray-500"
            />

            {/* Botão à direita */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-200">
              Buscar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
