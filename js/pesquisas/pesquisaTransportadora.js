if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.retornar');
}else{
    retornarMenu = document.querySelector('.retornar');
}
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['pesquisas'], main);
});
document.querySelector('table.pesquisa_transportadora').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('historico_transportadora')){
        fetch(`frontend/pesquisas/transportadora/historicoTransportadora.html`).then(function (response) {
            return response.text();
        }).then(function (html) {
            modalTelas.title_.innerText = 'Histórico Transportadora';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
            
        }).catch(function (err) {
            console.log('Erro carregar a página ', err);
        });
    }
    if(e.target.classList.contains('detalhe_transportadora')){
        fetch(`frontend/pesquisas/transportadora/detalheTransportadora.html`).then(function (response){
            return response.text();
        }).then(function (html){
            modalTelas.title_.innerText = 'Detalhes Transportadora';
            modalTelas.body_.innerHTML = html;
            modalTelas.show();
        }).catch(function (err){
            console.log('Erro carregar a página', err);
        })
    }
    if(e.target.classList.contains('excluir_transportadora')){
        modalTelas.title_.innerText = 'Remover Transportadora';
        modalTelas.body_.innerHTML = `<div class="d-block">
                                        <div> Deseja realmente remover o Fornecedor [nome]?</div>
                                      <div><button class="btn btn-danger me-2">Sim</button><button class="btn btn-primary">Cancelar</button></div></div>`;
        modalTelas.show();
                                      
    }
})