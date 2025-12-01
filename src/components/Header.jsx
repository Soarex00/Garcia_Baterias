import { ShoppingCart, Zap, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img className="h-20 w-auto" src="./public/logo3.png" alt="Logo" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#hero"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </a>
            <a
              href="#catalogo"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#howfunction"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* BOTÃO WHATSAPP DESKTOP */}
            <a
              href="https://wa.me/5553999023805?text=Ol%C3%A1!%20Tenho%20interesse%20em%20uma%20bateria,%20pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              {/* ÍCONE OFICIAL DO WHATSAPP */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="white"
              >
                <path d="M16.001 3.2c-7.047 0-12.8 5.616-12.8 12.549 0 2.209.607 4.366 1.76 6.266L3.2 28.8l7.007-1.828c1.835.997 3.907 1.523 5.794 1.523h.006c7.047 0 12.8-5.616 12.8-12.549s-5.754-12.746-12.806-12.746zm7.51 17.771c-.313.878-1.829 1.676-2.563 1.731-.653.05-1.49.07-2.399-.151-.553-.137-1.261-.41-2.173-.802-3.822-1.656-6.309-5.508-6.5-5.77-.191-.262-1.553-2.068-1.553-3.944 0-1.876.98-2.8 1.327-3.18.347-.38.756-.476 1.007-.476.251 0 .503.003.723.014.234.011.543-.088.85.646.313.75 1.064 2.598 1.159 2.786.095.188.158.41.03.672-.127.262-.191.41-.378.632-.188.222-.396.495-.563.664-.188.188-.383.394-.165.773.219.38.975 1.6 2.095 2.588 1.441 1.255 2.648 1.646 3.028 1.833.38.188.598.157.82-.095.222-.253.945-1.102 1.198-1.478.253-.38.503-.315.85-.188.347.126 2.197 1.036 2.574 1.225.377.19.628.283.722.441.094.157.094.908-.219 1.785z" />
              </svg>
              PEÇA AGORA
            </a>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="md:hidden p-2 rounded-lg transition-all active:bg-gray-200 hover:bg-gray-100"
            >
              {menuAberto ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              <a
                href="#hero"
                onClick={() => setMenuAberto(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Início
              </a>
              <a
                href="#catalogo"
                onClick={() => setMenuAberto(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Catálogo
              </a>
              <a
                href="#howfunction"
                onClick={() => setMenuAberto(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Sobre
              </a>
              <a
                href="#contact"
                onClick={() => setMenuAberto(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Contato
              </a>

              {/* BOTÃO WHATSAPP MOBILE */}
              <a
                href="https://wa.me/5553999023805?text=Ol%C3%A1!%20Tenho%20interesse%20em%20uma%20bateria,%20pode%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-green-500 text-white flex items-center justify-center gap-2 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                {/* ÍCONE OFICIAL DO WHATSAPP */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="white"
                >
                  <path d="M16.001 3.2c-7.047 0-12.8 5.616-12.8 12.549 0 2.209.607 4.366 1.76 6.266L3.2 28.8l7.007-1.828c1.835.997 3.907 1.523 5.794 1.523h.006c7.047 0 12.8-5.616 12.8-12.549s-5.754-12.746-12.806-12.746zm7.51 17.771c-.313.878-1.829 1.676-2.563 1.731-.653.05-1.49.07-2.399-.151-.553-.137-1.261-.41-2.173-.802-3.822-1.656-6.309-5.508-6.5-5.77-.191-.262-1.553-2.068-1.553-3.944 0-1.876.98-2.8 1.327-3.18.347-.38.756-.476 1.007-.476.251 0 .503.003.723.014.234.011.543-.088.85.646.313.75 1.064 2.598 1.159 2.786.095.188.158.41.03.672-.127.262-.191.41-.378.632-.188.222-.396.495-.563.664-.188.188-.383.394-.165.773.219.38.975 1.6 2.095 2.588 1.441 1.255 2.648 1.646 3.028 1.833.38.188.598.157.82-.095.222-.253.945-1.102 1.198-1.478.253-.38.503-.315.85-.188.347.126 2.197 1.036 2.574 1.225.377.19.628.283.722.441.094.157.094.908-.219 1.785z" />
                </svg>
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
