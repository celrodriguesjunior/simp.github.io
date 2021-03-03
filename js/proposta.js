$(document).ready(function () {

    getProposta()

})


function getProposta() {

    var titulo = "Título1"
    $('#tituloProposta').append('<strong>' + titulo + '</strong>')

    var categoria = "Categoria1"
    $('#categoriaProposta').text(categoria)

    getImagem()

    var descricao = "It is a long established fact that a reader will be distracted by the readable"+
    "content of a page when looking at its layout. The point of using Lorem Ipsum is"+
    "that it has a more-or-less normal distribution of letters, as opposed to using"+
    "'Content here, content here', making it look like readable English. Many desktop"+
    "publishing packages and web page editors now use Lorem Ipsum as their default"+
    "model text, and a search for 'lorem ipsum' will uncover many web sites still in"+
    "their infancy. Various versions have evolved over the years, sometimes by"+
    "accident, sometimes on purpose (injected humour and the like)."

    $('#textoDescricao').text(descricao)

    getDetalhesTecnicos()

    var contato = "There are many variations of passages of Lorem Ipsum available, but the majority"+
    "have suffered alteration in some form, by injected humour, or randomised words"+
    "which don't look even slightly believable. If you are going to use a passage of"+
    "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the"+
    "middle of text.";

    $('#contatoProposta').text(contato)

    getContato()

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

function getDetalhesTecnicos(){

    var divDetalhes = $('#detalhesTecnicos')

    var qtdIntegrantes = 3
    
    var divApoio2 = $('<div style="display: flex;flex-direction: row;">')

    var pInteg = $('<p style="line-height: 1.5; margin-left: 2px;"> '+qtdIntegrantes+'</p>')

    var integrantes = $('<b id="integrantes">Integrantes:</b>')

    divApoio2.append(integrantes)
    divApoio2.append(pInteg)

    var qtdTempo = 1
    var divApoio = $('<div style="display: flex;flex-direction: row;">')
    var pAnos = $('<p style="line-height: 1.5;  margin-left: 2px;"> '+qtdTempo+' ano(s) </p>')
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