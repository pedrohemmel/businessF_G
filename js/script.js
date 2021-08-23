let todosProdutos = document.getElementById('todosProdutos');
let acessoRedes = document.getElementById('acessoRedes');
let footer = document.getElementById('footer');
let apresentacaoCeo = document.getElementById('apresentacaoCeo');
let contato = document.getElementById('contato');
let maisVendidos = document.getElementById('maisVendidos');

function apareceDiv() {
    if(todosProdutos.style.display == 'block') {
        todosProdutos.style.display = 'none';
        footer.style.display = 'block';
        apresentacaoCeo.style.display = 'block';
        contato.style.display = 'block';
        maisVendidos.style.display = 'block';
    } else {
        todosProdutos.style.display = 'block';
        footer.style.display = 'none';
        apresentacaoCeo.style.display = 'none';
        contato.style.display = 'none';
        maisVendidos.style.display = 'none';
    }
}

function voltaMaisVendidos() {
    if(todosProdutos.style.display == 'block') {
        todosProdutos.style.display = 'none';
        footer.style.display = 'block';
        apresentacaoCeo.style.display = 'block';
        contato.style.display = 'block';
        maisVendidos.style.display = 'block';
    } 
}

function apareceRedes() {
    if(acessoRedes.style.display == 'block') {
        acessoRedes.style.display = 'none';
    } else {
        acessoRedes.style.display = 'block';
    }
}