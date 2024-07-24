if (typeof retornarMenu === 'undefined' || retornarMenu === null) {
    var retornarMenu = document.querySelector('.retornar');
} else {
    retornarMenu = document.querySelector('.retornar');
}
retornarMenu.addEventListener('click', function (e) {
    e.preventDefault();
    carregarPagina(paginas['ordemservicos'], main);
});
document.querySelector('#pesqCliente2').addEventListener('click', function () {
    e.preventDefault();
    fetch(`frontend/ordens/ordemNova/pesquisaCliente.html`).then(function (response) {
        return response.text();
    }).then(function (html) {
        modalTelas.title_.innerText = 'Pesquisar Cliente';
        modalTelas.body_.innerHTML = html;
        modalTelas.show();

    }).catch(function (err) {
        console.log('Erro carregar a página ', err);
    });

});
document.querySelector('#pesqProduto2').addEventListener('click', function(){
    e.preventDefault();
    fetch(`frontend/ordens/ordemNova/pesquisaProduto.html`).then(function (response) {
        return response.text();
    }).then(function (html) {
        modalTelas.title_.innerText = 'Pesquisar Produto';
        modalTelas.body_.innerHTML = html;
        modalTelas.show();

    }).catch(function (err) {
        console.log('Erro carregar a página ', err);
    });
})