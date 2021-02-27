$(document).ready(function () {

    getCategorias()

})



function getCategorias() {

    var divListCategorias = $("#Categorias")

    //console.log(divListCategorias)

    for (var i = 0; i < 4; i++) {

        var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-6">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemImg = $('<div class="item-img">')

        var img = $('<img src="img/cursos/7425388_stock-photo-computer-science-concept.jpg">')

        var divItemContent = $('<div class="item-content">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-5">Categoria ' + i + '</h5>')

        var divBtnSection = $('<div class="mbr-section-btn item-footer mt-2">')

        var aBtnPrimary = $('<a href="resultadoBusca.html" class="btn btn-primary item-btn display-7" target="_blank"> Ver Propostas</a>')


        divBtnSection.append(aBtnPrimary)

        divItemContent.append(h5)

        divItemImg.append(img)

        divItemWrapper.append(divItemImg)

        divItemWrapper.append(divItemContent)

        divItemWrapper.append(divBtnSection)

        divItem.append(divItemWrapper)

        divListCategorias.append(divItem)


    }



    /*
    <div class="item features-image сol-12 col-md-6 col-lg-6">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="img/cursos/7425388_stock-photo-computer-science-concept.jpg">
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-5">Categoria 1</h5>


                        </div>
                        <div class="mbr-section-btn item-footer mt-2">
                            <a href="resultadoBusca.html" class="btn btn-primary item-btn display-7" target="_blank"> Ver Propostas</a>
                        </div>
                    </div>
                </div>
    
    */

}