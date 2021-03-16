$(document).ready(function () {

    getCursos()

    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    });

})


function getCategorias(dados) {
    console.log(dados)
    //<option value="1">FURB</option>

    for (var i = 0; i < dados.data.length; i++) {
        var opcao = $('<option value="' + dados.data[i].id + '">' + dados.data[i].ds_nome + '</option>')
        $('#categorias').append(opcao)
    }

    $('#categorias').val(0)
}


function salvarImg() {

    let blob = new Blob([texto], { type: "image" });
    saveAs(blob, titulo + ".txt");


}