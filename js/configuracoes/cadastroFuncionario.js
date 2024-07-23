//Retorno ao menu principal
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['cadastros'], main);
});
$('#formCadastroFuncionario [name="cpfFuncionario"]').mask("000.000.000-00");
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
$('#formCadastroFuncionario [name="dtNascFuncionario"]').mask('00/00/0000');
$('#formCadastroFuncionario [name="celFuncionario"]').mask(SPMaskBehavior, spOptions);
$('#formCadastroFuncionario [name="telFuncionario"]').mask('(00) 0000-0000');
$('#formCadastroFuncionario [name="cepFuncionario"]').mask('00.000-000');
//Envio do Formulario
document.querySelector('#salvarFuncionario').addEventListener('click', function(e){
    e.preventDefault();
    formulario ??= new FormData(document.querySelector('#formCadastroServico'));
    dadosformulario ??= Object.fromEntries(formulario);
    console.log(dadosformulario);
})
document.querySelector('#limparFuncionario').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#formCadastroFuncionario').reset();
})