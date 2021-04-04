var img= 0;

$(document).ready(function () {

    // localStorage.setItem('id_user',1)
    // localStorage.setItem('isInstituicao', true)

    getCursosPopulares()

    getTemasPopulares()

    getNovosTemas()

    //getCursos()

    // localStorage.setItem("recomendacoes", "0")  //RETIRAR DEPOIS

    if (localStorage.getItem("recomendacoes") === "0" & localStorage.getItem('isInstituicao') == "false") {
        
        getRecomendacao(localStorage.getItem("id_user"))
        localStorage.setItem("recomendacoes", "1")
    }

    
    

});



function retornaImagem(resp){
    $("#a1").attr("src","data:image/jpg;base64," + resp.data.bl_arquivo)
}

// function retornaCursos(curso) {
//     curso.data[0].ds_nome
// }

function retornaRecomendacao(rec) { 
    
    modal.style.display = "block";
    dados = rec.data
    var listaResultados = $('#myModal')





    for (var i = 0; i < dados.length; i++) {


        var modalContent = $('<div class="modal-content"></div>')

        if (i == 0) {

            modalContent.append($('<div class="">Recomendações</div>'))

            var span = document.getElementsByClassName("close")[0];
            modalContent.append(span)

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }


        var divCard = $('<div class="card">')

        var divCardWrapper = $('<div class="card-wrapper">')

        var divRowAlign = $('<div class="row align-items-center">')

        var divCol12Img = $('<div class="col-12 col-md-4">')

        var divImageWrapper = $('<div class="image-wrapper">')
        
        
        var img = $('<img id="rec'+dados[i].nr_id+'" src="">')

        getImagemProposta(dados[i].nr_id).then( v => {
            
            
            // img = $('<img id="pop'+i+'">')
            $('#rec'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
            
            // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
            
            
        }).catch(() => {
        })
        

        var divCol23Cont = $('<div class="col-12 col-md">')

        var divCardBox = $('<div class="card-box">')

        var divRow = $('<div class="row">')

        var divColMd = $('<div class="col-md">')

        var titulo = dados[i].ds_nome

        var h6Titulo = $('<h6 class="card-title mbr-fonts-style display-5"><strong>' + titulo + '</strong></h6>')

        var resumo = dados[i].ds_desc_projeto

        var p = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')

        var divVisitar = $('<div class="col-md-auto"><div class="mbr-section-btn"><a href="proposta.html?nr_id=' + dados[i].nr_id + '&nr_id_usuario=' + (localStorage.getItem("id_user") ? localStorage.getItem("id_user") : "") + '" class="btn btn-primary display-4">Visitar Página</a></div></div>')

        divColMd.append(h6Titulo)
        divColMd.append(p)

        divRow.append(divColMd)
        divRow.append(divVisitar)

        divCardBox.append(divRow)

        divCol23Cont.append(divCardBox)

        divImageWrapper.append(img)

        divCol12Img.append(divImageWrapper)

        divRowAlign.append(divCol12Img)
        divRowAlign.append(divCol23Cont)

        divCardWrapper.append(divRowAlign)

        divCard.append(divCardWrapper)



        modalContent.append(divCard)
        listaResultados.append(modalContent)
    }

    // console.log(rec)
}


function retornaCursosPopulares(dados) {
    //console.log(dados)
    var divCategoria = $('#colunasCategorias')
    for (var i = 0; i < 5; i++) {
        var tagA = '<a href="resultadoBusca.html?dt_geracaoIni=&dt_geracaoFim=&ds_tipo=&nr_id_curso=' + dados.data[i].nr_id + '&qt_participantes=&ds_nome_ds_desc_projeto=" class="btn btn-primary item-btn display-7">' + dados.data[i].ds_nome + '</a>'
        var link = $(tagA)
        divCategoria.append(link)
    }

}

function retornaTemasPopulares(dados) {
    //console.log(dados   )
    var limite = dados.data.length < 3 ? dados.data.length : 3
    //console.log(limite)
    dados = dados.data

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

        var img = $('<img id="pop'+dados[i].nr_id+'" src="">')


        getImagemProposta(dados[i].nr_id).then( v => {
            
            
            // img = $('<img id="pop'+i+'">')
            $('#pop'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
            
            // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
            
            
        }).catch(() => {
        })
        
        
        var titulo = dados[i].ds_nome

        var h5 = $('<h5 class="item-title mbr-fonts-style display-5">' + titulo + '</h5>')

        var divSectionBtn = $('<div class="mbr-section-btn item-footer mt-2">')

        var linkProposta = $('<a href="proposta.html?nr_id=' + dados[i].nr_id + '&nr_id_usuario=' + (localStorage.getItem("id_user") ? localStorage.getItem("id_user") : "") + '" class="btn btn-primary item-btn display-7">Acesse a Pagina</a>')



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
    var limite = dados.data.length < 4 ? dados.data.length : 4
    dados = dados.data
    var divGallery = $('#galeriaRow')
    for (var i = 0; i < limite; i++) {

        var divItemGalery = $('<div class="col-12 col-md-6 col-lg-3 item gallery-image">')

        var linkProposta = $('<a href="proposta.html?nr_id=' + dados[i].nr_id + '&nr_id_usuario=' + (localStorage.getItem("id_user") ? localStorage.getItem("id_user") : "") + '" style="color: white;">')
        var divItemWrapper = $('<div class="item-wrapper" data-toggle="modal" data-target="#sh0kN6Fw0c-modal">')

        var img = $('<img id="nov'+dados[i].nr_id+'" src="" data-slide-to="3" data-target="#lb-sh0kN6Fw0c">')
        
        getImagemProposta(dados[i].nr_id).then( v => {
            
            // img = $('<img id="pop'+i+'">')
            $('#nov'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
            
            // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
            
            
        }).catch(() => {
        })

        // var img = $('<img class="w-100" src="img/temas/unknown.png" alt="" data-slide-to="3" data-target="#lb-sh0kN6Fw0c">')
        var iconWrapper = $('<div class="icon-wrapper">')
        var pText = $('<p style="text-align: center;">' + dados[i].ds_nome + '</p>')


        iconWrapper.append(pText)

        divItemWrapper.append(img)
        divItemWrapper.append(iconWrapper)
        linkProposta.append(divItemWrapper)
        divItemGalery.append(linkProposta)

        divGallery.append(divItemGalery)

    }



}

function pesquisar() {
    window.location = 'resultadoBusca.html?dt_geracaoIni=&dt_geracaoFim=&ds_tipo=&nr_id_curso=&qt_participantes=&ds_nome_ds_desc_projeto=' + $('#barraPesquisa')[0].value
}


