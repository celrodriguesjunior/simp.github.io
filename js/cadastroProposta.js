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
        var opcao = $('<option value="' + dados.data[i].id + '">' + dados.data[i].ds_nome + '</option>')
        $('#categorias').append(opcao)
    }

    $('#categorias').val(0)
}


function salvarProposta() {
    var dados = {
        "nr_id_curso" : $('#categorias').val(),
        "nr_id_instituicao" : $('#categorias').val(),
        "nr_id_proposta_uni" : 1,
        "ds_nome" : "",
        "ds_desc_projeto" : "Gravado",
        "cd_status" : "AB",
        "ds_requisito" : "",
        "qt_participantes" : 2,
        "ds_info_contatos" : "",
        "ds_tipo" : "",
        "dt_geracao" : "2021-03-13T00:00:00-03:00"    
}

    postProposta(dados)


    // let blob = new Blob([texto], { type: "image" });
    // saveAs(blob, titulo + ".txt");


}