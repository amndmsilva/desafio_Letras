var myArray = [];

$.ajax({
    method: 'GET',
    url: 'https://us-central1-prova-front-letras.cloudfunctions.net/ranking',
    success: function(response){
        myArray = response;
        construirRanking(myArray);
    }
});

// Função pega as informações no response da API que está no formato JSON e construi a tabela do ranking
function construirRanking(data) {
    var table = $('#ranking-tb')
    var linhas = ''

    ordenarPorScore(data)
    
    $.each(data, function (i, item) {
        linhas += '<tr><td class=\'id\'>' + (i + 1) + '</td><td colspan=2 class=\'name\'>' + item.name + '</td><td>' + item.score + '</td></tr>';
    });

    table.append(linhas);
    
}

//Utilizando o sort do javascript para ordenar a lista de ranking por score - O score mais alto vai ser o primeiro, o mais baixo vai aparecer por ultimo
function ordenarPorScore(data) {

    data.sort((a, b) => (a.score > b.score) ? -1 : 1)

}
