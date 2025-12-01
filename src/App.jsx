import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Botão flutuante de WhatsApp
function WhatsAppButton() {
  const mensagem = encodeURIComponent(
    "Olá! Preciso de ajuda com a bateria do meu carro."
  );
  const numero = "5553999023805";

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensagem}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        textDecoration: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      {/* Ícone oficial do WhatsApp em SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="white"
      >
        <path d="M16.001 3.2c-7.047 0-12.8 5.616-12.8 12.549 0 2.209.607 4.366 1.76 6.266L3.2 28.8l7.007-1.828c1.835.997 3.907 1.523 5.794 1.523h.006c7.047 0 12.8-5.616 12.8-12.549s-5.754-12.746-12.806-12.746zm7.51 17.771c-.313.878-1.829 1.676-2.563 1.731-.653.05-1.49.07-2.399-.151-.553-.137-1.261-.41-2.173-.802-3.822-1.656-6.309-5.508-6.5-5.77-.191-.262-1.553-2.068-1.553-3.944 0-1.876.98-2.8 1.327-3.18.347-.38.756-.476 1.007-.476.251 0 .503.003.723.014.234.011.543-.088.85.646.313.75 1.064 2.598 1.159 2.786.095.188.158.41.03.672-.127.262-.191.41-.378.632-.188.222-.396.495-.563.664-.188.188-.383.394-.165.773.219.38.975 1.6 2.095 2.588 1.441 1.255 2.648 1.646 3.028 1.833.38.188.598.157.82-.095.222-.253.945-1.102 1.198-1.478.253-.38.503-.315.85-.188.347.126 2.197 1.036 2.574 1.225.377.19.628.283.722.441.094.157.094.908-.219 1.785z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
