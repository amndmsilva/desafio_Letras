
var numerosGerados = [];

function gerarNumero() { 
    return Math.floor(Math.random() * (9) + 1);
}

function gerarAnimacao() {

	var display = document.getElementById('display');
	i = 0;

    //bloquear teclado
    mostrarNumerosGerados(0, display)  
    //desbloquear o teclado
    
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

function validar(numeroAtual){

    if(numeroAtual == numerosGerados[i]) {
        console.log( 'acertou')
        i++;
        if(i == numerosGerados.length) {
            var novoNumero = gerarNumero();
            numerosGerados.push(novoNumero);
            gerarAnimacao();
        }
    }else {
        var pontuacao = numerosGerados.length - 1;
        // mudar de pagina]
        console.log( 'acabo o jogo rapaz')
    }
    
}

function iniciarJogo() {
    var novoNumero = gerarNumero();
    numerosGerados.push(novoNumero);
    gerarAnimacao();
}

console.log(numerosGerados)

iniciarJogo();






 