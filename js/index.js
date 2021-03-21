$(document).ready(function () {

    getCursos()

    //getPropostas() // dps trocar para o populares

    getTemasPopulares()

    getNovosTemas()

    //getCursos()

});

function retornaCursos(curso) {
    curso.data[0].ds_nome
}



function getCategorias(dados) {
    //console.log(dados)
    var divCategoria = $('#colunasCategorias')
    for (var i = 0; i < 5; i++) {
        var tagA = '<a href="resultadoBusca.html?Categoria='+dados.data[i].nr_id+'" class="btn btn-primary item-btn display-7" target="_blank">' + dados.data[i].ds_nome + '</a>'
        var link = $(tagA)
        divCategoria.append(link)
    }

}

function retornaTemasPopulares(dados) {

    var limite = dados.data.length < 3 ? dados.data.length : 3
    var carrosel = $('#carroselSlider')
    for (var i = 0; i < limite; i++) {
        var divCarrossel;
        if (i == 0)
            divCarrossel = $('<div class="carousel-item slider-image item active">')
        else
            divCarrossel = $('<div class="carousel-item slider-image item">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemContent = $('<div class="item-content">')

        var divImg = $('<div class="item-img">')

        var img = $('<img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg">')

        var titulo = dados.data[i].ds_nome

        var h5 = $('<h5 class="item-title mbr-fonts-style display-5">' + titulo + '</h5>')

        var divSectionBtn = $('<div class="mbr-section-btn item-footer mt-2">')

        var linkProposta = $('<a href="proposta.html?id='+ dados.data[i].nr_id+'" class="btn btn-primary item-btn display-7"target="_blank">acesse a Pagina</a>')



        divImg.append(img)

        divSectionBtn.append(linkProposta)

        divItemContent.append(divImg)

        divItemContent.append(h5)

        divItemWrapper.append(divItemContent)
        divItemWrapper.append(divSectionBtn)

        divCarrossel.append(divItemWrapper)

        carrosel.append(divCarrossel)

    }



}


function retornaNovosTemas(dados) {

    var divGallery = $('#galeriaRow')
    var limite = dados.data.length < 4 ? dados.data.length : 4
    for (var i = 0; i < limite; i++) {

        var divItemGalery = $('<div class="col-12 col-md-6 col-lg-3 item gallery-image">')
        var linkProposta = $('<a href="proposta.html?id='+ dados.data[i].nr_id+'" style="color: white;">')
        var divItemWrapper = $('<div class="item-wrapper" data-toggle="modal" data-target="#sh0kN6Fw0c-modal">')
        var img = $('<img class="w-100" src="img/temas/unknown.png" alt="" data-slide-to="3" data-target="#lb-sh0kN6Fw0c">')
        var iconWrapper = $('<div class="icon-wrapper">')
        var pText = $('<p style="text-align: center;">' + dados.data[i].ds_nome + '</p>')


        iconWrapper.append(pText)

        divItemWrapper.append(img)
        divItemWrapper.append(iconWrapper)
        linkProposta.append(divItemWrapper)
        divItemGalery.append(linkProposta)

        divGallery.append(divItemGalery)

    }



}

