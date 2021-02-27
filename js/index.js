$(document).ready(function () {

    getCategorias()

    getTemaDestaque()

    getNovosTemas()

});



function getCategorias() {

    for (var i = 0; i < 5; i++) {
        var divCategoria = $('#colunasCategorias')
        var tagA = '<a href="resultadoBusca.html" class="btn btn-primary item-btn display-7" target="_blank">Categoria Destaque '+i+'</a>'
        var link = $(tagA)
        divCategoria.append(link)
    }

}


function getTemaDestaque() {

    var carrosel = $('#carroselSlider')
    for (var i = 0; i < 3; i++) {
        var divCarrossel;
        if (i == 0)
            divCarrossel = $('<div class="carousel-item slider-image item active">')
        else
            divCarrossel = $('<div class="carousel-item slider-image item">')
    
            var divItemWrapper = $('<div class="item-wrapper">')
        
            var divItemContent = $('<div class="item-content">')
        
            var divImg = $('<div class="item-img">')
        
            var img = $('<img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg">')
        
            var h5 = $('<h5 class="item-title mbr-fonts-style display-5">Tema Destaque ' + i + '</h5>')
        
            var divSectionBtn = $('<div class="mbr-section-btn item-footer mt-2">')
        
            var linkProposta = $('<a href="proposta.html" class="btn btn-primary item-btn display-7"target="_blank">acesse a Pagina</a>')
        
        
        
            divImg.append(img)
        
            divSectionBtn.append(linkProposta)
        
            divItemContent.append(divImg)
        
            divItemContent.append(h5)
        
            divItemWrapper.append(divItemContent)
            divItemWrapper.append(divSectionBtn)
        
            divCarrossel.append(divItemWrapper)
        
            console.log(divCarrossel)
        
            carrosel.append(divCarrossel)
        
            console.log(carrosel)
        }



}


function getNovosTemas() {

    for (var i = 0; i < 4; i++) {
        var divGallery = $('#galeriaRow')

        var divItemGalery = $('<div class="col-12 col-md-6 col-lg-3 item gallery-image">')
        var linkProposta = $('<a href="proposta.html" style="color: white;">')
        var divItemWrapper = $('<div class="item-wrapper" data-toggle="modal" data-target="#sh0kN6Fw0c-modal">')
        var img = $('<img class="w-100" src="img/temas/unknown.png" alt="" data-slide-to="3" data-target="#lb-sh0kN6Fw0c">')
        var iconWrapper = $('<div class="icon-wrapper">')
        var pText = $('<p>Novo Tema '+i+'</p>')


        iconWrapper.append(pText)

        divItemWrapper.append(img)
        divItemWrapper.append(iconWrapper)
        linkProposta.append(divItemWrapper)
        divItemGalery.append(linkProposta)

        divGallery.append(divItemGalery)

    }



}

