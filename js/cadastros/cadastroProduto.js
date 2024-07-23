//Retorno ao menu principal
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['cadastros'], main);
});
//Controle do formulario
$('#formCadastroProduto [name="codigo"]').mask('0#', {maxlength: false});
$('#formCadastroProduto [name="pesobruto"]').mask('0000000000,000', {reverse: true});
$('#formCadastroProduto [name="pesoliquido"]').mask('0000000000,000',{reverse: true});
$('#formCadastroProduto [name="valorvenda"]').mask('000.000.000.000,00', {reverse:true});
$('#formCadastroProduto [name="customedio"]').mask('000.000.000.000,00', {reverse:true});
$('#formCadastroProduto [name="custoanual"]').mask('000.000.000.000,00', {reverse:true})
$('#formCadastroProduto [name="estoqueminimo"]').mask('0#', {maxlength: false});
$('#formCadastroProduto [name="estoquemaximo"]').mask('0#', {maxlength: false});

//Envio do formulario
document.querySelector('#salvarProduto').addEventListener('click', function(e){
    e.preventDefault();
    formulario ??= new FormData(document.querySelector('#formCadastroCliente'));
    dadosformulario ??= Object.fromEntries(formulario);
    console.log(dadosformulario);

});
document.querySelector('#limparProduto').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#formCadastroProduto').reset();
})