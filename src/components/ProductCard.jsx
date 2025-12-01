import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function ProductCard({ products: externalProducts = [] }) {
  const [products, setProducts] = useState([]);

  // Se receber produtos via props → usar eles
  useEffect(() => {
    if (externalProducts.length > 0) {
      setProducts(externalProducts);
      return;
    }

    // Caso contrário → busca da API
    async function loadProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }

    loadProducts();
  }, [externalProducts]);

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#002D72] rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain p-4"
              />

              <div className="px-5 pb-6 text-center flex flex-col flex-1">
                <p className="text-gray-500 text-sm mb-1">
                  Modelo <span className="font-medium">{product.model}</span>
                </p>

                <h3 className="text-lg font-bold text-[#002D72] mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm">A partir de</p>

                <p className="text-2xl font-bold text-[#002D72] mb-4">
                  R${" "}
                  {Number(product.price).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => {
                      const mensagem = `Olá! Tenho interesse na bateria *${product.name}* modelo ${product.model}. Pode me ajudar?`;
                      const msgEncoded = encodeURIComponent(mensagem);
                      const numero = "5511999999999";

                      window.open(
                        `https://wa.me/${numero}?text=${msgEncoded}`,
                        "_blank"
                      );
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#002D72] text-white font-semibold py-2.5 rounded-lg hover:bg-[#003B99] transition-all"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Compre Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
