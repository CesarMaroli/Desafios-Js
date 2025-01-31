let total = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].trim());
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = valorUnitario * quantidade;
    total += preco;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
        </section>`;
    document.getElementById('valor-total').innerText = `R$${total.toFixed(2)}`;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    total = 0;
    document.getElementById('valor-total').innerText = 'R$0.00';
}