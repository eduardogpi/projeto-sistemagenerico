//Retorno ao menu principal
if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.retornar');
}else{
    retornarMenu = document.querySelector('.retornar');
}
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['cadastros'], main);
});

//Controle do Formulario

$('[name="cpfFornecedor"]').mask('000.000.000-00');

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

$('[name="telFornecedor"]').mask('(00) 0000-0000');
$('[name="cepFornecedor"]').mask('00000-00', {
    onComplete: async function(cep){
        const retorno = await buscaCEP(cep);
        console.log(retorno);
        $('[name="logradFornecedor"]').val(retorno.logradouro).attr("readonly", true);

        $('[name="bairroFornecedor"]').val(retorno.bairro).attr("readonly", true);
        $('[name="ufFornecedor"]').val(retorno.uf).attr("readonly", true);
        $('[name="cidFornecedor"]').val(retorno.localidade).attr("readonly", true);
        
    }
});
$('[name="celFornecedor"]').mask(SPMaskBehavior, spOptions);
$('[name="numFornecedor"]').mask('/[0-9]/');

//Envio do formulario
document.querySelector('#salvarFornecedor').addEventListener('click', function(e){
    formulario ??= new FormData(document.querySelector('#formCadastroFornecedor'));
    dadosformulario ??= Object.fromEntries(formulario);
    dadosformulario['nomeFornecedor'] = dadosformulario['nomeFornecedor'].toUpperCase();
    dadosformulario['emailFornecedor'] = dadosformulario['emailFornecedor'].toLowerCase();
    dadosformulario['logradFornecedor'] = dadosformulario['logradFornecedor'].toUpperCase();
    dadosformulario['bairroFornecedor'] = dadosformulario['bairroFornecedor'].toUpperCase();
    dadosformulario['complementoFornecedor'] = dadosformulario['complementoFornecedor'].toUpperCase();
    console.log(dadosformulario)
});
document.querySelector('#limparFornecedor').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#formCadastroFornecedor').reset();
})