import { imoveisService } from '../service/imoveis-service.js';
import templateCardImovel from '../utils/templateCardImovel.js';

const imoveis_container = document.getElementById('imoveis');

imoveisService.buscaImoveis().then(imoveis => {
    imoveis.forEach(imovel => imoveis_container.innerHTML += templateCardImovel(imovel));
});