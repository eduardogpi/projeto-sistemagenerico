if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.retornar');
}
//Retorno ao menu principal
retornarMenu.addEventListener('click', function (e) {
    e.preventDefault();
    carregarPagina(paginas['cadastros'], main);
});
//Controle do Formulario

$('[name="cpfCliente"]').mask('000.000.000-00');
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

$('[name="celCliente"]').mask(SPMaskBehavior, spOptions);
$('[name="telCliente"]').mask('(00) 0000-0000');

$('[name="cepCliente"]').mask('00000-000', {
    onComplete: async function(cep){
        const retorno = await buscaCEP(cep);
        console.log(retorno);
        $('[name="logradCliente"]').val(retorno.logradouro).attr("readonly", true);

        $('[name="bairroCliente"]').val(retorno.bairro).attr("readonly", true);
        $('[name="ufCliente"]').val(retorno.uf).attr("readonly", true);
        $('[name="cidCliente"]').val(retorno.localidade).attr("readonly", true);
        
    }
});
$('[name="numCliente"]').mask('0#', {maxlength: false});

//Envio do Formulario
document.querySelector('#salvarCliente').addEventListener('click', function (e) {
    
    formulario ??= new FormData(document.querySelector('#formCadastroCliente'));
    dadosformulario ??= Object.fromEntries(formulario);
    dadosformulario['nomeCliente'] = dadosformulario['nomeCliente'].toUpperCase();
    dadosformulario['emailCliente'] = dadosformulario['emailCliente'].toLowerCase();
    dadosformulario['logradCliente'] = dadosformulario['logradCliente'].toUpperCase();
    dadosformulario['bairroCliente'] = dadosformulario['bairroCliente'].toUpperCase();
    dadosformulario['complementoCliente'] = dadosformulario['complementoCliente'].toUpperCase();
    console.log(dadosformulario)
});

//Limpeza do Formulario
document.querySelector('#limparCliente').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#formCadastroCliente').reset();
})