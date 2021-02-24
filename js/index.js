$(document).ready(function () {

    getCategorias()


});



function getCategorias() {

    for (var i = 0; i < 5; i++) {

        //a href="resultadoBusca.html" class="btn btn-primary item-btn display-7" target="_blank">Categoria Destaque 1</a>

        var divCategoria = $('#colunasCategorias')
        console.log(divCategoria)
        var tagA = '<a href="resultadoBusca.html" class="btn btn-primary item-btn display-7" target="_blank">Categoria Destaque 1</a>'

        var link = $(tagA)

        //console()
        divCategoria.append(link)

    }

}


function getTemaDestaque() {

    for (var i = 0; i < 3; i++) {
        var divCarrossel;
        if (i == 0) {
            divCarrossel = $('<div class="carousel-item slider-image item active">')
        } else {
            divCarrossel = $('<div class="carousel-item slider-image item">')
        }

        var carrosel = $('#carroselSlider')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemContent = $('<div class="item-content">')

        var divImg = $('<div class="item-img">')

        var img = $('<img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-5">Tema Destaque 1</h5>')

        var divSectionBtn = $('<div class="mbr-section-btn item-footer mt-2">')

        var linkProposta = $('<a href="proposta.html" class="btn btn-primary item-btn display-7"target="_blank">acesse a Pagina</a>')



        divImg.append(img)

        divSectionBtn.append(linkProposta)

        divItemContent.append(divImg)

        divItemContent.append(h5)

    }


    /*
                                <div class="carousel-item slider-image item active">
                                    <div class="item-wrapper">
                                        <div class="item-content">
                                            <div class="item-img">
                                                <img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg">
                                            </div>
                                            <h5 class="item-title mbr-fonts-style display-5">Tema Destaque 1</h5>
    
                                        </div>
                                        <div class="mbr-section-btn item-footer mt-2">
                                            <a href="proposta.html" class="btn btn-primary item-btn display-7"
                                                target="_blank">
                                                Acesse a Pagina
                                            </a>
                                        </div>
                                    </div>
                                </div>
    
    
    */

}