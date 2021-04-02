$(document).ready(function () {

    getCursos()

})

function  montaPesquisa(){
var dados = {
    dt_geracaoIni:  $('#de')[0].value,
    dt_geracaoFim:  $('#atee')[0].value,
    ds_tipo: $('#tipo')[0][0].value,
    nr_id_curso: $('#selectCategorias')[0][0].value,
    qt_participantes: $('#qtd')[0].value,
    ds_nome_ds_desc_projeto: $('#search')[0].value
    
  }
  
  $('#link')[0].href += "?"+encodeQueryData(dados)


}


 function retornaCursos(dados){
    var dados = dados.data
    var selectCategoria = $('#selectCategorias')
    

    for (var i = 0; i < dados.length; i++) {
        var option;
        if (i == 0)
            option = $('<option value="'+dados[i].nr_id+'">' + dados[i].ds_nome + '</option>')
        else
            option = $('<option value="'+dados[i].nr_id+'">' + dados[i].ds_nome  + '</option>')

        selectCategoria.append(option)

    }

    console.log(selectCategoria)


    /*

    */
}