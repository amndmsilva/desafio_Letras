var numerosGerados = [];

//Gerando o número aleatório que será mostrado no marcador de pontuação na página de game-over
function gerarNumero() { 
    return Math.floor(Math.random() * (9) + 1);
}

function gerarAnimacao() {
	var display = document.getElementById('display');
	i = 0;
    mostrarNumerosGerados(0, display)  
}

function mostrarNumerosGerados(posicao, display) {
    display.innerHTML = numerosGerados[posicao]

    setTimeout(function() {
        posicao++;
        if(posicao >= numerosGerados.length) {
            display.innerHTML = ""
            return;
        } else {
            mostrarNumerosGerados(posicao, display)
        }
    }, 300);
}

//Verificando se o usuário clicou na mesma sequencia mostrada pelo marcador
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






 