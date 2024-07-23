//Retorno ao menu principal
if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.retornar');
}
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['cadastros'], main);
});

$('#formCadastroTransportadora [name="cpfTransportadora"]').mask('000.000.000-00');
if (typeof SPMaskBehavior === 'undefined' || SPMaskBehavior === null) {
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

}

$('#formCadastroTransportadora [name="celTransportadora"]').mask(SPMaskBehavior, spOptions);
$('#formCadastroTransportadora [name="telTransportadora"]').mask('(00) 0000-0000');
$('#formCadastroTransportadora [name="cepTransportadora"]').mask('00000-000', {
    onComplete: async function(cep){
        const retorno = await buscaCEP(cep);
        console.log(retorno);
        $('[name="logradFornecedor"]').val(retorno.logradouro).attr("readonly", true);

        $('[name="bairroFornecedor"]').val(retorno.bairro).attr("readonly", true);
        $('[name="ufFornecedor"]').val(retorno.uf).attr("readonly", true);
        $('[name="cidFornecedor"]').val(retorno.localidade).attr("readonly", true);
        
    }
});

//Envio do Formulario
document.querySelector('#salvarTransportadora').addEventListener('click', function(e){
    e.preventDefault();
    formulario ??= new FormData(document.querySelector('#formCadastroTransportadora'));
    dadosformulario ??= Object.fromEntries(formulario);
    console.log(dadosformulario);
});
document.querySelector('#limparTransportadora').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#formCadastroTransportadora').reset();
})