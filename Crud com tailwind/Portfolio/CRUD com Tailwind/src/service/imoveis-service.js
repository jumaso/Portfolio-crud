async function criaImovel(imovel) {
    try {
        return await fetch('http://localhost:3000/imoveis', {
            method: 'POST',
            body: JSON.stringify(imovel),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function buscaImoveis() {
    try {
        const imoveisJSON = await fetch('http://localhost:3000/imoveis');
        return await imoveisJSON.json();
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function excluirImovel(id) {
    try {
        return await fetch(`http://localhost:3000/imoveis/${id}`, {
            method: 'DELETE'
        });
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function alterarImovel(dadosAlterados, id) {
    try {
        return await fetch(`http://localhost:3000/imoveis/${id}`, {
            method: 'PUT',
            body: JSON.stringify(dadosAlterados),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    };
};

async function buscaImovel(id) {
    try {
        const imovelJSON = await fetch(`http://localhost:3000/imoveis/${id}`);
        return await imovelJSON.json();
    } catch (erro) {
        alert(`Verifique se o servidor está online! Erro: ${erro.message}`);
    }
}

export const imoveisService = {
    criaImovel,
    buscaImoveis,
    excluirImovel,
    alterarImovel,
    buscaImovel
};