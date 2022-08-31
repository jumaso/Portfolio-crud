import { imoveisService } from "./service/imoveis-service.js";
import Imovel from "./utils/Imovel.js";

const formulario_cadastro = document.forms.namedItem('cadastro');

formulario_cadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const imovel = new Imovel(formulario_cadastro);

    imoveisService.criaImovel(imovel);
});