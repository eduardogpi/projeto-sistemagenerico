//Carregamento das páginas 
var main = document.querySelector('main');
var nvecollapse = new bootstrap.Collapse('#sidebarMenu', {
    toggle: false
});


function carregarPagina(url, dom_fragment_recipient) {
    if (url == undefined) { 
        alert('sem url ainda...'); 
        return;
    }
    if (url == 'home') {
        dom_fragment_recipient.innerHTML = '';
        /* Quando o menu está no mobile, evita que ele fique colapsado */
        nvecollapse.hide();
        return;
    }

    fetch(url).then(function (response) {
        return response.text();
    }).then(function (html) {
        dom_fragment_recipient.innerHTML = html;
        /* Quando o menu está no mobile, evita que ele fique colapsado */
        nvecollapse.hide();

        dom_fragment_recipient.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains('btn-outline-dark')) {
                containPage(e.target?.id);
            }

        })
    }).catch(function (err) {
        console.log('Erro carregar a página ', err);
    })
}
paginas = {
    'home': 'home',
    'cadastros': 'frontend/cadastros/cadastroIndex.html',
    'pesquisas': 'frontend/pesquisas/pesquisaIndex.html',
    'ordemservicos': 'frontend/ordens/ordemIndex.html',
    'vendas': 'frontend/vendas/vendaIndex.html',
    'compras': 'frontend/compras/compraIndex.html',
    'configuracoes': 'frontend/configuracoes/configuracoeIndex.html',
    'entradas': 'frontend/entradas/entradaIndex.html'
}
/* Efeito de menu ativo e carregamento de paginas principais */
menu = document.getElementById('menu');
menu.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.active').classList.remove('active');
    document.getElementById(e.target.id).classList.add('active');
    carregarPagina(paginas[e.target.id], main);
})

var modalTelas = new bootstrap.Modal(document.getElementById('modalTelas'))
modalTelas.dialog_ = document.querySelector('.modal-dialog');
modalTelas.title_ = document.querySelector('.modal-title');
modalTelas.body_ = document.querySelector('.modal-body');

/*
    modalTelas.title_.innerText = 'Titulo ao portador';  
    modalTelas.body_.innerHTML = `<div><a class="nav-link" href="#">Teste de link</a></div>`; 
    modalTelas.show();
*/
/* Carrega cada pagina interna especifica */
function containPage(page) {
    /* Separa a pasta */
    let fold = page.split('_')[0];
    /* Separa a pagina */
    let pag = page.split('_').length > 2 ? (page.split('_')[1] + '_' + page.split('_')[2]).replace('s_', '') : page.replace('s_', '');
    /* Adiciona o titulo do formulario */
    let titulo = page.split('_').length > 2 ? (page.split('_')[1] + '_' + page.split('_')[2]).replace('s_', ' ') : page.replace('s_', ' ');
    /* Transforma a primeira letra do titulo em maiuscula */
    titulo = titulo[0].toUpperCase() + titulo.substr(1);
    /* Com cada id fornecido de maneira logica para cada pasta e arquivo dentro do frontend com o nome do arquivo */
    fetch(`frontend/${fold}/${pag}.html`).then(function (response) {
        return response.text();
    }).then(function (html) {
        main.innerHTML = html;
        /* Carrega cada javascript proprio de cada pagina sem acarretar carregamento exarcebado em pagina unica */
        loadJS(`js/${fold}/${pag}.js`);
    }).catch(function (err) {
        console.log('Erro carregar a página ', err);
    });
}
/* Funcao que carrega cada arquivo unitario javascript para cada pagina */
function loadJS(path) {
    document.body.querySelector('[data-id="pageScript"]') != null ? document.body.querySelector('[data-id="pageScript"]').remove() : '';
    if (path != '') {
        let codigo = document.createElement('SCRIPT');
        codigo.setAttribute('data-id', 'pageScript');
        codigo.setAttribute('src', path);
        document.body.append(codigo);
    }
    

}
// variáveis do formularios
var formulario = null;
var dadosformulario = null;
/* Funcao assincrona que procura ceps */
async function buscaCEP(cep) {
    cepedit = cep.replace(/\D/g, "");
    try {
        const url = `https://viacep.com.br/ws/${cepedit}/json/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
/* Responsavel por criar alertas no sistema via componente Toast */
var toastContainer = document.getElementById('toastContainer')
function displayToast(mensagem, tipo = 'dark') {
    let toast_main = document.createElement('DIV')
    toast_main.classList.add("toast","align-items-center",`text-bg-${tipo}`,"border-0")
    toast_main.setAttribute('role', 'alert');
    toast_main.setAttribute('aria-live', 'assertive');
    toast_main.setAttribute('aria-atomic', 'true');
    let toast_all = document.createElement('DIV');
    toast_all.classList.add('d-flex');
    let toast_body = document.createElement('DIV');
    toast_body.classList.add('toast-body');
    toast_body.innerHTML = mensagem;
    let toast_close = document.createElement('BUTTON');
    toast_close.setAttribute('type', 'button');
    toast_close.setAttribute('data-bs-dismiss','toast');
    toast_close.setAttribute('aria-label','Close');
    toast_close.classList.add("btn-close","btn-close-white","me-2","m-auto");
    toast_all.append(toast_body);
    toast_all.append(toast_close);
    toast_main.append(toast_all);
    toastContainer.append(toast_main);
    let alerta = bootstrap.Toast.getOrCreateInstance(toast_main);
    alerta.show();
}