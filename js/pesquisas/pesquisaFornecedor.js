if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.ret-pesquisa');
}

retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['pesquisas'], main);
});
document.querySelector('table.pesquisa_fornecedor').addEventListener('click', function(e){
    
    e.preventDefault();
    if(e.target.classList.contains('historico_fornecedor')){
        fetch(`frontend/pesquisas/fornecedor/historicoFornecedor.html`).then(function (response) {
            return response.text();
        }).then(function (html) {
            modalTelas.title_.innerText = 'Histórico Fornecedor';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
            
        }).catch(function (err) {
            console.log('Erro carregar a página ', err);
        });
    }
    if(e.target.classList.contains('detalhe_fornecedor')){
        fetch(`frontend/pesquisas/fornecedor/detalheFornecedor.html`).then(function (response){
            return response.text();
        }).then(function (html){
            modalTelas.title_.innerText = 'Detalhes Fornecedor';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
        }).catch(function (err){
            console.log('Erro carregar a página', err);
        })
    }
    if(e.target.classList.contains('excluir_fornecedor')){
        modalTelas.title_.innerText = 'Remover Fornecedor';
        modalTelas.body_.innerHTML = `<div class="d-block">
                                        <div> Deseja realmente remover o Fornecedor [nome]?</div>
                                      <div><button class="btn btn-danger me-2">Sim</button><button class="btn btn-primary">Cancelar</button></div></div>`;
        modalTelas.show();
                                      
    }
})