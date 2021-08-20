let todosProdutos = document.getElementById('todosProdutos');

function apareceDiv() {
    if(todosProdutos.style.display == 'block') {
        todosProdutos.style.display = 'none';
    } else {
        todosProdutos.style.display = 'block';
    }
}