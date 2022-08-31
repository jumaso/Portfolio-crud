import { imoveisService } from '../service/imoveis-service.js';
import Imovel from '../utils/Imovel.js';

const formulario = document.forms.namedItem('editar');

const url = new URL(window.location);
const id = url.searchParams.get('id');

function preencheCamposFormulario(imovel) {
    formulario.tipo.value = imovel.tipo;
    formulario.descricao.value = imovel.descricao;
    formulario.quartos.value = imovel.quartos;
    formulario.valor.value = imovel.valor;
    formulario.vendaoualuguel.value = imovel.vendaoualuguel;
    formulario.url_foto.value = imovel.url_foto;

};

window.onload = () => {
    imoveisService.buscaImovel(id)
        .then(imovel => preencheCamposFormulario(imovel));
};

window.cancelarEdicao = () => {
    window.location.href = 'imoveis.html';
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const imovelEditado = new Imovel(formulario);

    imoveisService.alterarImovel(imovelEditado, id)
        .finally(() => window.location.href = 'imoveis.html');
});