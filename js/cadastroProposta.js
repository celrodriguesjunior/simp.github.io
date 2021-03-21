$(document).ready(function () {

    getCursos()

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
    var dados = {
        "nr_id_curso": Number($('#categorias').val()),
        "nr_id_instituicao": $('#categorias').val(),
        "ds_nome": $('#nomeProposta').val(),
        "ds_desc_projeto": $('#descricao').val(),
        "cd_status": "AB",
        "ds_requisito": $('#requisitos').val(),
        "qt_participantes": Number($('#qtdeParticipantes').val()),
        "ds_info_contatos": $('#contato').val(),
        "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
        "dt_geracao": new Date()
    }

    console.log(dados)

    postProposta(dados)


    // let blob = new Blob([texto], { type: "image" });
    // saveAs(blob, titulo + ".txt");


}



function salvarImg(){

}