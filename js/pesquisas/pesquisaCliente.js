if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.ret-pesquisa');
}else{
    retornarMenu = document.querySelector('.retornar');
}
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['pesquisas'], main);
});
document.querySelector('table.pesquisa_cliente').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('historico_cliente')){
        fetch(`frontend/pesquisas/cliente/historicoCliente.html`).then(function (response) {
            return response.text();
        }).then(function (html) {
            modalTelas.title_.innerText = 'Histórico Cliente';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
            
        }).catch(function (err) {
            console.log('Erro carregar a página ', err);
        });
    }
    if(e.target.classList.contains('detalhe_cliente')){
        fetch(`frontend/pesquisas/cliente/detalheCliente.html`).then(function (response){
            return response.text();
        }).then(function (html){
            modalTelas.title_.innerText = 'Detalhes Cliente';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
        }).catch(function (err){
            console.log('Erro carregar a página', err);
        })
    }
    if(e.target.classList.contains('excluir_cliente')){
        modalTelas.title_.innerText = 'Remover Cliente';
        modalTelas.body_.innerHTML = `<div class="d-block">
                                        <div> Deseja realmente remover o cliente [nome]?</div>
                                      <div><button class="btn btn-danger me-2">Sim</button><button class="btn btn-primary">Cancelar</button></div></div>`;
        modalTelas.show();
                                      
    }
})