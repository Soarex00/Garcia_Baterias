import { Footer, FooterCopyright, FooterLink, FooterLinkGroup} from "flowbite-react";

export default function FooterVoltz() {
return (
    <Footer container className="text-white">
        <div className="w-full">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">

              <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-white font-bold text-xl">Voltz</h1>
              <img src="bateriaFooter.png" className="w-30"/>
              </div>


                <FooterLinkGroup className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-xl">
                        <a className="text-white" href="categorias">Categorias</a>
                    </h1>
                    <ul className="flex flex-col gap-2 font-light">
                        <li><a className="text-white" href="#">Baterias de Carro</a></li>
                        <li><a className="text-white" href="#">Baterias de Moto</a></li>
                        <li><a className="text-white" href="#">Baterias de Caminhão</a></li>
                        <li><a className="text-white" href="#">Baterias Estacionária</a></li>
                    </ul>
                </FooterLinkGroup>

                <FooterLinkGroup className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-xl">
                        <a className="text-white" href="suporte">Suporte</a>
                    </h1>
                    <ul className="flex flex-col gap-2 font-light">
                        <li><a className="text-white" href="#">Contato</a></li>
                        <li><a className="text-white" href="#">Perguntas Frequentes</a></li>
                        <li><a className="text-white" href="#">Garantia</a></li>
                        <li><a className="text-white" href="#">Trocas e Devoluções</a></li>
                    </ul>
                </FooterLinkGroup>

                <FooterLinkGroup className="flex flex-col items-start gap-4">
                    <h1 className="font-bold text-xl">
                        <a className="text-white" href="atendimento">Atendimento</a>
                    </h1>
                    <ul className="flex flex-col gap-2 text font-light">
                        <li><a className="text-white" href="#">Segunda á Sexta: 08h ás 18h</a></li>
                        <li><a className="text-white" href="#">Sábado: 08 ás 14h</a></li>
                        <li><a className="text-white" href="#">Domingo: Fechado</a></li>
                        <li><a className="text-white" href="#">O site segue visível fora do horário de funcionamento.</a></li>
                    </ul>
                </FooterLinkGroup>
            </div>

            <hr className="bg-yellow-300 border-amber-300 my-10" />

            <FooterCopyright
                href="#"
                by="Voltz. Todos os direitos reservados."
                year={2025}
                className="text-white"
            />
        </div>
    </Footer>
);
}
