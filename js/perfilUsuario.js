//var finalizado = false;

$(document).ready(function () {

    var url = new URL(window.location.href)

    getUsuario(localStorage.getItem("id_user"))

    //getUniversitario(url.searchParams.get("id"))
    var idpag = url.searchParams.get("id")
    //console.log(idpag);

    //localStorage.setItem("IdUsuario", 1)
    //console.log(localStorage.getItem("id_user"))
    //console.log(idpag)
    //console.log(localStorage.getItem("id_user") == idpag)
    if (localStorage.getItem("id_user") == idpag) {
        var a = $('<a href="cadastroUsuario.html?id=' + localStorage.getItem("id_user") + '" class="btn btn-primary display-4">Editar Perfil</a>')
        var div = $('<div class="mbr-section-btn">')
        div.append(a)
        console.log(div)
        console.log($('#menuPerfil'))
        $('#menuPerfil').append(div)
    }


    //getpropostasfeitas
    //getpropostasfazendo

})


function retornaUniversitario(dados) {



    dados = dados.data
    console.log(dados)


}

function retornaUsuario(dados) {

    dados = dados.data;

    idUniversitario = dados.nr_id;
    $("#nomeCompleto").text(dados.ds_nome + " " + dados.ds_sobrenome)
    $("#email").text(dados.ds_email)
    $("#telefone").text(dados.ds_telefone)


    getPropostasUniversitario(idUniversitario, "CO")
    //finalizado = true;
    getPropostasUniversitario(idUniversitario, "DV")

    getCidade(dados.nr_id_cidade)
    getEstado(dados.nr_id_estado)
    
    
    getImagemUsuario(dados.nr_id_usuario).then( resp => {
            // if(resp != null){
            // img = $('<img id="pop'+i+'">')
            // console.log("Resp: " + resp)
            $('#imagemPerfil').attr("src","data:image/jpg;base64," + resp.data[0].arquivo.bl_arquivo)            
            // }else{
            // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
            // }
            
        })
}

function retornaEstado(resp) {
    $('#endereco').text($('#endereco').text() + ", " + resp.nome)

}

function retornaCidade(resp) {
    $('#endereco').text(resp.nome)

}

function retornaPropostasUniversitario(dados) {

    dados = dados.data;

    var isFinalizado = true;
    //
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

function nenhumaProsposta(status) {
    if (status == "DV") {
        $('#projetosDesenvolvimento').append("<div><p>Nenhum Projeto</p></div>");
    } else {
        $('#projetosParticipados').append("<div><p>Nenhum Projeto</p></div>");

    }
}
