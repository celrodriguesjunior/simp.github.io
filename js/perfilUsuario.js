$(document).ready(function () {



    getUniversitario(1)


    if (localStorage.getItem("IdUsuario") != idpag)
        $('#btnEditarPerfil').hide()


    //getpropostasfeitas
    //getpropostasfazendo

})


function retornaUniversitario(dados) {


    dados = dados.data

    $("#nomeCompleto").text(dados.ds_nome + " " + dados.ds_sobrenome)
    $("#email").text(dados.ds_email)
    $("#telefone").text(dados.ds_telefone)



}


