export default function Imovel(formulario) {
    this.tipo = formulario.tipo.value;
    this.descricao = formulario.descricao.value;
    this.vendaoualuguel = formulario.vendaoualuguel.value;
    this.valor = formulario.valor.value;
    this.quartos = formulario.quartos.value;
    this.url_foto = formulario.url_foto.value;
};