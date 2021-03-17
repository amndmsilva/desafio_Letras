var score = localStorage.getItem("pontuacao");

document.getElementById("score").innerHTML = score;


//Salvar dados na pagina ranking
function salvarRanking() {

    var dadosName = document.getElementById("name").value;

    var dados = {
        "name": dadosName,
        "score": Number.parseInt(score)
    }
    
    $.ajax({
        method: 'POST',
        url: 'https://us-central1-prova-front-letras.cloudfunctions.net/save',
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(dados),
        success: function(response){
            window.location.href = 'page-ranking.html'
        }
    })
}


