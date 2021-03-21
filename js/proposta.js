$(document).ready(function () {
    var url = new URL(window.location.href)
    
    
    var parametro = url.searchParams.get("nr_id_usuario")
    
    getProposta(url.searchParams.get("nr_id"),parametro === "null" ? "": parametro)

    

})


function retornaProposta(proposta) {
    proposta = proposta.data
    
    $('#tituloProposta').append('<strong>' + proposta.ds_nome + '</strong>')

    getCurso(proposta.nr_id_curso)

    

    getImagem()


    $('#textoDescricao').text(proposta.ds_desc_projeto)

    getDetalhesTecnicos(proposta)

    

    $('#contatoProposta').text(proposta.ds_info_contatos)

    getContato(proposta)

}

function retornaCurso(curso){
    curso = curso.data
    $('#categoriaProposta').text(curso.ds_nome)
}


function getImagem() {

    var carrosel = $('#carroselImagem')

    for (var i = 0; i < 3; i++) {

        var divCarrosel;
        if (i == 0)
            divCarrosel = $('<div class="carousel-item slider-image item active">')
        else
            divCarrosel = $('<div class="carousel-item slider-image item ">')


        var img = $('<div class="item-wrapper"><img class="d-block w-100" src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg"></div>')

        divCarrosel.append(img)


        carrosel.append(divCarrosel)
    }

    /*
    <div class="carousel-item slider-image item active">
                                <div class="item-wrapper"><img class="d-block w-100" src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg"></div>
                            </div>
    */
}

function getDetalhesTecnicos(proposta){

    var divDetalhes = $('#detalhesTecnicos')

    
    
    var divApoio2 = $('<div style="display: flex;flex-direction: row;">')

    var pInteg = $('<p style="line-height: 1.5; margin-left: 2px;"> '+proposta.qt_participantes+'</p>')

    var integrantes = $('<b id="integrantes">Integrantes:</b>')

    divApoio2.append(integrantes)
    divApoio2.append(pInteg)

    var qtdTempo = 1
    var divApoio = $('<div style="display: flex;flex-direction: row;">')
    var pAnos = $('<p style="line-height: 1.5;  margin-left: 2px;"> '+proposta.ds_duracao+'</p>')
    var tempo = $('<b id="tempo">Tempo:</b>')

    divApoio.append(tempo)
    divApoio.append(pAnos)


    divDetalhes.append(divApoio2)
    
    divDetalhes.append($('<br>'))
    
    divDetalhes.append(divApoio)

    /*
    <b id="integrantes">Integrantes:</b> 2
                                        <br>
                                        <b id="tempo">Tempo:</b> 2 anos 
    */

}

function getContato(){

}