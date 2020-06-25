//alert("JS main - test");

function consultaCEP() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    
    // requisição ajax do JQuery
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            /*$("#logradouro").html(response.logradouro);
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("bairro").innerHTML = response.bairro;*/
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //alert(response.bairro);
        }
    })
}

$(function cep() {
    $(".cep").hide();
    $(".barra-progresso").hide();
});