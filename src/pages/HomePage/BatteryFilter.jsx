import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import ProductCard from "../../components/ProductCard";

// Função para normalizar strings (remover acentos, caixa alta, espaços extras)
const normalize = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .toLowerCase()
    .trim();

export default function BatteryFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Busca produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
      }
    };

    fetchProducts();
  }, []);

  // Filtro aprimorado
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts([]);
      return;
    }

    const search = normalize(searchTerm);

    const results = products.filter((product) =>
      product.vehicles.some((vehicle) => normalize(vehicle).includes(search))
    );

    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <>
      <section className="bg-white py-12 px-6 md:px-12 shadow-lg mx-4 md:mx-12 mt-10 border-gray-200">
        <div className="max-w-3xl mx-auto text-center text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">
            Encontre a bateria ideal para o seu veículo ⚡
          </h2>
          <p className="text-gray-500">
            Digite o modelo do seu carro e veja qual bateria é mais recomendada.
          </p>

          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700 h-5 w-5" />

            <input
              type="text"
              placeholder="Digite o modelo do veículo"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-24 py-3 rounded-xl bg-gray-50 border border-blue-300 
                text-gray-900 text-base shadow-sm focus:ring-2 focus:ring-blue-400 
                focus:outline-none transition-all duration-200 placeholder:text-gray-500"
            />

            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 
                text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all"
            >
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      {filteredProducts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#002D72] text-center mb-6">
            Baterias recomendadas para "{searchTerm}"
          </h3>
          <ProductCard products={filteredProducts} />
        </div>
      )}

      {/* NENHUM RESULTADO */}
      {searchTerm && filteredProducts.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          <p>Nenhuma bateria encontrada para "{searchTerm}"</p>
          <p className="text-sm mt-2">Tente outro modelo de veículo</p>
        </div>
      )}
    </>
  );
}
