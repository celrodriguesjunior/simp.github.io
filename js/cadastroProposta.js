var editar = false;
var url;

$(document).ready(function () {


    getCursos()
    url = new URL(window.location.href)
    //console.log(url.searchParams.get("id"))



    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    });

})


function retornaCursos(dados) {
    // console.log(dados)
    //<option value="1">FURB</option>

    for (var i = 0; i < dados.data.length; i++) {
        var opcao = $('<option value="' + dados.data[i].nr_id + '">' + dados.data[i].ds_nome + '</option>')
        $('#categorias').append(opcao)
    }

    $('#categorias').val(0)


    if (url.searchParams.get("id") != undefined) {
        getProposta(url.searchParams.get("id"), "")
        console.log("cheguei 1")
        $('#tituloPaginaProposta').text("Editar Proposta")
        editar = true;
    }

    // if (editar) {
    //     var opcao = 0



    //     for (let index = 0; index < $('#categorias')[0].options.length; index++) {

    //         if ($('#categorias')[0].options[index].value == dados.nr_id_curso) {
    //             opcao = index
    //         }



    //     }
    // }

}


function salvarProposta() {

    var cd = "AB"
    switch ($('#status').val()) {
        case "1":
            cd = "AB"
            break;
        case "2":
            cd = "NE"
            break;
        case "3":
            cd = "DV"
            break;
        case "4":
            cd = "CA"
            break;
        case "5":
            cd = "CO"
            break;

        default:
            break;
    }


    if (editar) {
        var dados = {
            "nr_id": Number(url.searchParams.get("id")),
            "nr_id_curso": Number($('#categorias').val()),
            "nr_id_instituicao": Number(localStorage.getItem("id_user")),
            "ds_nome": $('#nomeProposta').val(),
            "ds_desc_projeto": $('#descricao').val(),
            "cd_status": cd,
            "ds_requisito": $('#requisitos').val(),
            "qt_participantes": Number($('#qtdeParticipantes').val()),
            "ds_info_contatos": $('#contato').val(),
            "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
            "nr_duracao": Number($('#duracao').val())
        }
        console.log("update")
        console.log(dados)
        putProposta(dados)

    }
    else {
        var dados = {
            "nr_id_curso": Number($('#categorias').val()),
            "nr_id_instituicao": Number(localStorage.getItem("id_user")),
            "ds_nome": $('#nomeProposta').val(),
            "ds_desc_projeto": $('#descricao').val(),
            "cd_status": cd,
            "ds_requisito": $('#requisitos').val(),
            "qt_participantes": Number($('#qtdeParticipantes').val()),
            "ds_info_contatos": $('#contato').val(),
            "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
            "dt_geracao": new Date(),
            "nr_duracao": Number($('#duracao').val())
        }

        postProposta(dados)

    }


    // let blob = new Blob([texto], { type: "image" });
    // saveAs(blob, titulo + ".txt");


}


function retornaProposta(dados) {
    dados = dados.data
    var opcao = 0



    for (let index = 0; index < $('#categorias')[0].options.length; index++) {

        if ($('#categorias')[0].options[index].value == dados.nr_id_curso) {
            opcao = index
        }



    }



    http://127.0.0.1:5500/cadastroProposta.html?id=1
    //console.log("cheguei 2")
    
    console.log(dados)
    $('#categorias')[0].selectedIndex = opcao,
        $('#nomeProposta').val(dados.ds_nome),
        $('#descricao').val(dados.ds_desc_projeto),
        $('#requisitos').val(dados.ds_desc_projeto),
        $('#qtdeParticipantes').val(dados.qt_participantes),
        $('#contato').val(dados.ds_info_contatos),
        dados.ds_tipo == "TCC" ? $('#tipo').val(1) : $('#tipo').val(2)
    switch (dados.cd_status) {
        case "AB":
            $('#status')[0].selectedIndex = 0
            break;
        case "NE":
            $('#status')[0].selectedIndex = 1
            break;
        case "DV":
            $('#status')[0].selectedIndex = 2
            break;
        case "CA":
            $('#status')[0].selectedIndex = 3
            break;
        case "CO":
            $('#status')[0].selectedIndex = 4
            break;

        default:
            $('#status').val(1)
            break;
    }
    $('#duracao').val(dados.nr_duracao)
}

function retornaCadastroProposta(resp){
    alert("Cadastro feito com sucesso!")
    location.href = "proposta.html?nr_id="+resp.data[0].nr_id+"&nr_id_usuario="+localStorage.getItem("id_user")
}

function salvarImg() {
    var formData = new FormData();
    if($('#img1').files.length > 0){
        formData.append("imagem1", $('#img1').files[0]);
    }

    if($('#img2').files.length > 0){
        formData.append("imagem2", $('#img2').files[0]);
    }

    if($('#img3').files.length > 0){
        formData.append("imagem3", $('#img3').files[0]);
    }
    
}