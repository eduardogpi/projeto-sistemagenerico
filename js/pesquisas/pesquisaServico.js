let retornarMenu = document.querySelector('.ret-pesquisa');
retornarMenu.addEventListener('click', function(e){
    e.preventDefault();
    carregarPagina(paginas['pesquisas'], main);
});