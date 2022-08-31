import { imoveisService } from "../service/imoveis-service.js";

export default function templateCardImovel(imovel) {
    return `
       <div class="imovel p-4">
                <div class="bg-gray-700 m-auto p-3 w-4/5 rounded-md flex-col items-center text-center rounded-b-md">
                    <h2>${imovel.tipo} ${imovel.descricao} ${imovel.quartos}</h2>
                    <div class="font-extrabold text-center  m-auto w-4/5 mt-6 flex ">
                        <img
                            width="400"
                            src="${imovel.url_foto}"
                            alt="${imovel.tipo} ${imovel.descricao}"
                            class="rounded-md m-auto">
                        </div>
                    <div >
                        <p class="p-2">Venda ou aluguel: ${imovel.vendaoualuguel}</p>
                        <p class="p-2">Valor ${imovel.valor}</p>
                    </div>
                    <div>
                        <button onclick="editarImovel(${imovel.id})" class="bg-yellow-400 box-border rounded text-base px-6 py-2 text-black">Editar</button>
                        <button onclick="excluirImovel(${imovel.id})" class="bg-red-500 box-border rounded text-base  px-6 py-2 mr-3 text-black">Excluir</button>
                    </div>
                </div>
          </div>
       `;
}

window.editarImovel = (id) => {
    window.location.href = `editar.html?id=${id}`;
};

window.excluirImovel = (id) => {
    if (window.confirm('Tem certeza que quer excluir esse imóvel? Essa ação é irreverssível!!!')) {
        imoveisService.excluirImovel(id);
    };
};