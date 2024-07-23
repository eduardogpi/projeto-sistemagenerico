
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['pesquisas'], main);
});
document.querySelector('table.pesquisa_produto').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('historico_produto')){
        fetch(`frontend/pesquisas/produto/historicoProduto.html`).then(function (response) {
            return response.text();
        }).then(function (html) {
            modalTelas.title_.innerText = 'Histórico Fornecedor';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
            
        }).catch(function (err) {
            console.log('Erro carregar a página ', err);
        });
    }
    if(e.target.classList.contains('detalhe_produto')){
        fetch(`frontend/pesquisas/Produto/detalheProduto.html`).then(function (response){
            return response.text();
        }).then(function (html){
            modalTelas.title_.innerText = 'Detalhes Fornecedor';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
        }).catch(function (err){
            console.log('Erro carregar a página', err);
        })
    }
    if(e.target.classList.contains('excluir_produto')){
        modalTelas.title_.innerText = 'Remover Produto';
        modalTelas.body_.innerHTML = `<div class="d-block">
                                        <div> Deseja realmente remover o Produto [nome]?</div>
                                      <div><button class="btn btn-danger me-2">Sim</button><button class="btn btn-primary">Cancelar</button></div></div>`;
        modalTelas.show();
                                      
    }
})