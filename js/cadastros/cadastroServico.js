//Retorno ao menu principal
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['cadastros'], main);
})
//Controle formulario
$('#formCadastroServico [name="codigo"]').mask('0#', {maxlength: false});
$('#formCadastroServico [name="custo"]').mask('000.000.000.000,00', {reverse:true});
$('#formCadastroServico [name="valor"]').mask('000.000.000.000,00', {reverse:true});

//Envio do formulario
document.querySelector('#salvarServico').addEventListener('click', function(e){
    e.preventDefault();
    formulario ??= new FormData(document.querySelector('#formCadastroServico'));
    dadosformulario ??= Object.fromEntries(formulario);
    console.log(dadosformulario);
})
document.querySelector('#limparServico').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#formCadastroServico').reset();
})