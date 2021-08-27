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


function apareceRedes() {
    if(acessoRedes.style.display == 'block') {
        acessoRedes.style.display = 'none';
    } else {
        acessoRedes.style.display = 'block';
    }
}