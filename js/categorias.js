$(document).ready(function () {

    getCursos()

})



function getCategorias(dados) {

    var divListCategorias = $("#Categorias")

    console.log(dados.data.length)

    for (var i = 0; i < dados.data.length; i++) {

        var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-6">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemImg = $('<div class="item-img">')

        var img = $('<img src="img/cursos/7425388_stock-photo-computer-science-concept.jpg">')

        var divItemContent = $('<div class="item-content">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-5">' + dados.data[i].ds_nome + '</h5>')

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
    console.log(dados)

}