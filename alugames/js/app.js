function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Você tem certeza que deseja devolver este jogo?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}

function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

// Exemplo de uso
console.log(ordenarNumeros(3, 1, 2)); // [1, 2, 3]
console.log(ordenarNumeros(10, 5, 8)); // [5, 8, 10]

function ehPalindromo(texto) {
    let textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();
    let textoReverso = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoReverso;
}

// Exemplo de uso
console.log(ehPalindromo("A man, a plan, a canal, Panama")); // true
console.log(ehPalindromo("Hello, World!")); // false

function contarJogosAlugados() {
    let alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Jogos alugados: ${alugados}`);
}
