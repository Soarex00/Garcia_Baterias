import { Footer, FooterCopyright, FooterLinkGroup } from "flowbite-react";
import { Zap } from "lucide-react";

export default function FooterVoltz() {
  return (
    <Footer
      container
      className="bg-zinc-900 text-white rounded-none border-t border-yellow-400"
    >
      <div className="w-full">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center py-10 gap-8 px-6">
          {/* Logo com raio */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <h1 className="text-2xl font-bold text-yellow-400">Voltz</h1>
            </div>
            <p className="text-sm text-gray-300">
              Energia que te leva mais longe ⚡
            </p>
          </div>

          {/* Categorias */}
          <FooterLinkGroup className="flex flex-col items-start gap-3">
            <h1 className="font-bold text-lg text-yellow-400">Categorias</h1>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Baterias de Carro
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Baterias de Moto
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Baterias de Caminhão
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Baterias Estacionárias
                </a>
              </li>
            </ul>
          </FooterLinkGroup>

          {/* Suporte */}
          <FooterLinkGroup className="flex flex-col items-start gap-3">
            <h1 className="font-bold text-lg text-yellow-400">Suporte</h1>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Contato
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Garantia
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400" href="#">
                  Trocas e Devoluções
                </a>
              </li>
            </ul>
          </FooterLinkGroup>

          {/* Atendimento */}
          <FooterLinkGroup className="flex flex-col items-start gap-3">
            <h1 className="font-bold text-lg text-yellow-400">Atendimento</h1>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>Segunda a Sexta: 08h às 18h</li>
              <li>Sábado: 08h às 14h</li>
              <li>Domingo: Fechado</li>
              <li className="text-gray-400">
                Site disponível fora do horário comercial.
              </li>
            </ul>
          </FooterLinkGroup>
        </div>

        <hr className="border-yellow-400 my-6 mx-6" />

        <FooterCopyright
          href="#"
          by="Voltz. Todos os direitos reservados."
          year={2025}
          className="text-center text-sm text-gray-400 pb-4"
        />
      </div>
    </Footer>
  );
}
