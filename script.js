//Carregamento das páginas
var main = document.querySelector('main');
var nvecollapse = new bootstrap.Collapse('#sidebarMenu', {
    toggle: false
});


function carregarPagina(url, dom_fragment_recipient) {
    if (url == undefined) { alert('sem url ainda...'); return }
    if (url == 'home') { dom_fragment_recipient.innerHTML = ''; nvecollapse.hide(); return }
    fetch(url).then(function (response) {
        return response.text();
    }).then(function (html) {
        dom_fragment_recipient.innerHTML = html;
        nvecollapse.hide();
        dom_fragment_recipient.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains('btn-outline-dark')) {
                modalPage(e.target?.id);
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
    'ordemservicos': 'frontend/ordems/ordemIndex.html',
    'vendas': 'frontend/vendas/vendaIndex.html',
    'compras': 'frontend/compras/compraIndex.html',
    'configuracoes': 'frontend/configuracoes/configuracoeIndex.html',
    'entradas': 'frontend/entradas/entradaIndex.html'
}
menu = document.getElementById('menu');
menu.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.active').classList.remove('active');
    document.getElementById(e.target.id).classList.add('active');
    carregarPagina(paginas[e.target.id], main);
})

let modalTelas = new bootstrap.Modal(document.getElementById('modalTelas'))
modalTelas.dialog_ = document.querySelector('.modal-dialog');
modalTelas.title_ = document.querySelector('.modal-title');
modalTelas.body_ = document.querySelector('.modal-body');


function modalPage(page) {
    let fold = page.split('_')[0];
    let pag = page.split('_').length > 2 ? (page.split('_')[1] + '_' + page.split('_')[2]).replace('s_', '') : page.replace('s_', '');
    let titulo = page.split('_').length > 2 ? (page.split('_')[1] + '_' + page.split('_')[2]).replace('s_', ' ') : page.replace('s_', ' ');
    titulo = titulo[0].toUpperCase() + titulo.substr(1);
    fetch(`frontend/${fold}/${pag}.html`).then(function (response) {
        return response.text();
    }).then(function (html) {
        //modalTelas.title_.innerText = titulo;
        //modalTelas.show();
        //modalTelas.body_.innerHTML = html;
        main.innerHTML = html
        loadJS(`js/${fold}/${pag}.js`);
    }).catch(function (err) {
        console.log('Erro carregar a página ', err);
    });
}
function loadJS(path) {
    document.body.querySelector('[data-id="pageScript"]') != null ? document.body.querySelector('[data-id="pageScript"]').remove() : '';
    if (path != '') {
        let codigo = document.createElement('SCRIPT');
        codigo.setAttribute('data-id', 'pageScript');
        codigo.setAttribute('src', path);
        document.body.append(codigo);
    }

}
// variáveis do formulario
var formulario = null;
var dadosformulario = null;
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

var toastContainer = document.getElementById('toastContainer')

function createToast(mensagem, tipo = 'dark') {
    let one = document.createElement('DIV')
    one.classList.add("toast","align-items-center",`text-bg-${tipo}`,"border-0")
    one.setAttribute('role', 'alert');
    one.setAttribute('aria-live', 'assertive');
    one.setAttribute('aria-atomic', 'true');
    let two = document.createElement('DIV');
    two.classList.add('d-flex');
    let three = document.createElement('DIV');
    three.classList.add('toast-body');
    three.innerHTML = mensagem;
    let four = document.createElement('BUTTON');
    four.setAttribute('type', 'button');
    four.setAttribute('data-bs-dismiss','toast');
    four.setAttribute('aria-label','Close');
    four.classList.add("btn-close","btn-close-white","me-2","m-auto");
    two.append(three);
    two.append(four);
    one.append(two);
    toastContainer.append(one);
    let testToast = bootstrap.Toast.getOrCreateInstance(one);
    testToast.show();
}