var numerosGerados = []; //salva os números gerados dentro de um array

// Gerando o número aleatório 
function gerarNumero() { 
    return Math.floor(Math.random() * (9) + 1);
}

// Animação mostrará a sequencia de números aleatórios gerado no display
function gerarAnimacao() {
	var display = document.getElementById('display');
	i = 0;
    mostrarNumerosGerados(0, display)  
}

// Função setTimeout repete o número gerado aleatório no intervalo de tempo de 300ms
function mostrarNumerosGerados(posicao, display) {
    display.innerHTML = numerosGerados[posicao]

    setTimeout(function() {
        posicao++;
        if(posicao >= numerosGerados.length) {
            display.innerHTML = ""
            return;
        } else {
            mostrarNumerosGerados(posicao, display) // Devolve os números que já passaram, para ser mostrado no display
        }
    }, 300);
}

//Verificando se o usuário clicou na mesma sequencia mostrada pelo display
function validar(numeroAtual){
    if(numeroAtual == numerosGerados[i]) {
        i++;
        if(i == numerosGerados.length) {
            var novoNumero = gerarNumero();
            numerosGerados.push(novoNumero);
            gerarAnimacao();
        }
    } else {
        // Caso o usuário erre a sequencia a pontuação é calculada e é redirecionado para a página game-over e será mostrado no score da página
        var pontuacao = numerosGerados.length - 1;
        localStorage.setItem("pontuacao", pontuacao);
        window.location.href = "../views/page-game-over.html"
    } 
}

//Dando start no game
function iniciarJogo() {
    var novoNumero = gerarNumero();
    numerosGerados.push(novoNumero);
    gerarAnimacao();
}

iniciarJogo();






 