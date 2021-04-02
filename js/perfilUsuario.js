var idUniversitario;

$(document).ready(function () {

    var url = new URL(window.location.href)

    getUsuario(localStorage.getItem("id_user"))

    //getUniversitario(url.searchParams.get("id"))
    var idpag = url.searchParams.get("id")
    //localStorage.setItem("IdUsuario", 1)
    console.log(localStorage.getItem("IdUsuario"))
    if (localStorage.getItem("IdUsuario") != idpag)
        $('#btnEditarPerfil').hide()


    //getpropostasfeitas
    //getpropostasfazendo

})


function retornaUniversitario(dados) {

    //console.log(dados)
    dados = dados.data

    $("#nomeCompleto").text(dados.ds_nome + " " + dados.ds_sobrenome)
    $("#email").text(dados.ds_email)
    $("#telefone").text(dados.ds_telefone)



}

function retornaUsuario(dados) {

    dados = dados.data;

    idUniversitario = dados.nr_id;

    getPropostasUniversitario(idUniversitario, "CO")

    getPropostasUniversitario(idUniversitario, "DV")
    


}

function retornaPropostasUniversitario(dados) {

    dados = dados.data;

    var isFinalizado = true;

    if (dados.length > 0)
        isFinalizado = dados[0].cd_status == "CO";

    var div = isFinalizado ? $('#projetosParticipados') : $('#projetosDesenvolvimento');


    for (var i = 0; i < dados.length; i++) {

        //if(isFinalizado){

        var divRow = $('<div style="display: flex; flex-direction: row;">')
        var h6 = $('<h6 class="card-title mbr-fonts-style display-4" style="width: 51%;">' + dados[0].ds_nome + '</h6>')
        var divBtn = $('<div class="mbr-section-btn" style="width: 49%;  margin-left: 5px;">')
        var aBtn = $('<a href="cadastroProposta.html?id=' + dados[i].nr_id + '"class="btn btn-primary display-3">Detalhes</a>')

        divBtn.append(aBtn)

        divRow.append(h6)
        divRow.append(divBtn)

        div.append(divRow)

        /*
        
        <div style="display: flex; flex-direction: row;">
                  <h6 class="card-title mbr-fonts-style display-4" style="width: 51%;">Realidade Virtual para Jovens
                  </h6>
                  <div class="mbr-section-btn" style="width: 49%;  margin-left: 5px;">
                    <a href="cadastroProposta.html?id='+dados[i].nr_id+'"class="btn btn-primary display-3">Detalhes</a>
                  </div>
                </div>
        
        
        */

    }


}
