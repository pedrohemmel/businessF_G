let todosProdutos = document.getElementById('todosProdutos');
let acessoRedes = document.getElementById('acessoRedes');
let navbar = document.getElementById('navbar');
let bottomNavbar = document.getElementById('bottom-navbar-container');
let banners = document.getElementById('banners-container');
let apresentacao = document.getElementById('apresentacao');
let footer = document.getElementById('footer');
let apresentacaoCeo = document.getElementById('apresentacaoCeo');
let contato = document.getElementById('contato');
let maisVendidos = document.getElementById('maisVendidos');
let sejaParceiro = document.getElementById('sejaParceiro');

function apareceDiv() {
    if(todosProdutos.style.display == 'block') {
        todosProdutos.style.display = 'none';
        footer.style.display = 'block';
        apresentacaoCeo.style.display = 'block';
        contato.style.display = 'block';
        maisVendidos.style.display = 'block';
        sejaParceiro.style.display = 'block';
        apresentacao.style.display = 'block';
        bottomNavbar.style.display = 'block';
        banners.style.display = 'block';
        navbar.style.display = 'block';
    } else {
        todosProdutos.style.display = 'block';
        footer.style.display = 'none';
        apresentacaoCeo.style.display = 'none';
        contato.style.display = 'none';
        maisVendidos.style.display = 'none';
        sejaParceiro.style.display = 'none';
        apresentacao.style.display = 'none';
        bottomNavbar.style.display = 'none';
        banners.style.display = 'none';
        navbar.style.display = 'none';
    }
}



function apareceRedes() {
    if(acessoRedes.style.display == 'block') {
        acessoRedes.style.display = 'none';
    } else {
        acessoRedes.style.display = 'block';
    }
}