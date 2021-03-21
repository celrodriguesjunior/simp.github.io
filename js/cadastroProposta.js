var editar = false;
var url;

$(document).ready(function () {


    getCursos()
    url = new URL(window.location.href)
    console.log(url.searchParams.get("id"))

    if (url.searchParams.get("id") != undefined) {
        getProposta(url.searchParams.get("id"), "")
        console.log("cheguei 1")
        $('#tituloPaginaProposta').text("Editar Proposta")
        editar = true;
    }


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
}


function salvarProposta() {


    

    if (editar) {
        var dados = {
            "nr_id": Number(url.searchParams.get("id")),
            "nr_id_curso": Number($('#categorias').val()),
            "nr_id_instituicao": 1, //dps colocar pra pegar da instituicao logada
            "ds_nome": $('#nomeProposta').val(),
            "ds_desc_projeto": $('#descricao').val(),
            "cd_status": "AB",
            "ds_requisito": $('#requisitos').val(),
            "qt_participantes": Number($('#qtdeParticipantes').val()),
            "ds_info_contatos": $('#contato').val(),
            "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
            "ds_duracao": $('#duracao').val()
        }
        console.log("update")
        console.log(dados)
        putProposta(dados)

    }
    else {
        var dados = {
            "nr_id_curso": Number($('#categorias').val()),
            "nr_id_instituicao": 1, //dps colocar pra pegar da instituicao logada
            "ds_nome": $('#nomeProposta').val(),
            "ds_desc_projeto": $('#descricao').val(),
            "cd_status": "AB",
            "ds_requisito": $('#requisitos').val(),
            "qt_participantes": Number($('#qtdeParticipantes').val()),
            "ds_info_contatos": $('#contato').val(),
            "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
            "dt_geracao": new Date()
        }

        postProposta(dados)

    }


    // let blob = new Blob([texto], { type: "image" });
    // saveAs(blob, titulo + ".txt");


}


function retornaProposta(dados) {
    //console.log("cheguei 2")
    dados = dados.data
    console.log(dados)
    $('#categorias').val(dados.nr_id_curso),
    $('#nomeProposta').val(dados.ds_nome),
    $('#descricao').val(dados.ds_desc_projeto),
    $('#requisitos').val(dados.ds_desc_projeto),
    $('#qtdeParticipantes').val(dados.qt_participantes),
    $('#contato').val(dados.ds_info_contatos),
    dados.ds_tipo == "TCC" ? $('#tipo').val(1) : $('#tipo').val(2)
    $('#duracao').val(dados.ds_duracao)
}


function salvarImg() {

}