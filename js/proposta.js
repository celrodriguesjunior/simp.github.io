$(document).ready(function () {
    $('#universitarios').hide()
    var url = new URL(window.location.href)


    var parametro = url.searchParams.get("id_usuario")

    getProposta(url.searchParams.get("id"), parametro === "null" ? "" : parametro)



})

function getInteresse() {

    var interesse = true
    if (interesse) {

        var div = $('<div style="border: 1px black solid; border-radius: 5px; width: 200px; display:flex; flex-direction:row; justify-content:center; ">')
        var h6 = $('<a style="text-align: center;padding-top: 14px;width:100%;" id="linkInteresse">Interessado</a>')
        div.append(h6)
        div.insertAfter("#statos")

    } else {
        var div = $('<div style="border: 0px black solid; border-radius: 5px; width: 250px; display:flex; flex-direction:row; justify-content:center;">')
        var aLink = $('<a class="btn btn-primary item-btn display-7" style="margin: 0;" id="sinalizarIntersse">Sinalizar Interesse</a>')
        div.append(aLink)
        aLink.insertAfter("#statos")

    }

    $('#linkInteresse').hover(e => {
        $('#linkInteresse').text("Cancelar Interesse")
    }, e => {
        $('#linkInteresse').text("Interessado")
    })

    $('#linkInteresse').click(e=>{
        alert("Interesse cancelado")
        document.location.reload(true);
    })

    $('#sinalizarIntersse').click(e=>{
        alert("tenho interesse")
    })

}

function retornaProposta(proposta) {
    proposta = proposta.data

    $('#tituloProposta').append('<strong>' + proposta.ds_nome + '</strong>')

    getCurso(proposta.nr_id_curso)

    getImagem(proposta)


    getStatus(proposta.cd_status)
    getInteresse()

    getInstituicao(proposta.nr_id_instituicao)


    $('#textoDescricao').text(proposta.ds_desc_projeto)

    getDetalhesTecnicos(proposta)



    $('#contatoProposta').text(proposta.ds_info_contatos)

    if (proposta.cd_status == "DV") {
        $('#universitarios').show()
        montaUniversitarios(proposta)

    }
    // getContato(proposta)

}

function montaUniversitarios(proposta) {

    var univs = proposta.universitarios
    var listaUnv = $("#UnvTrab")

    var qtd = 0
    if (univs) {
        for (var i = 0; i < univs.length; i++) {

            var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-3">')

            var divItemWrapper = $('<div class="item-wrapper">')

            var divItemImg = $('<div class="item-img">')

            // var img = $('<img id="univ' + univs[i].nr_id + '" src="">')

            // $('#univ' + univs[i].nr_id).attr("src", "data:image/jpg;base64," + univs[i].agrupadorArquivo[0].arquivo.bl_arquivo)
            var img = $('<img id="univ" src="data:image/jpg;base64,' + univs[i].agrupadorArquivo[0].arquivo.bl_arquivo + '">')


            // img[0].style.height = '300px'
            // img[0].style.width = '300px'

            var divItemContent = $('<div class="item-content">')

            var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + univs[i].ds_nome_exibido + '</strong></h5>')

            // var textoResumo = univs[i].ds_desc_projeto

            // var pResumo = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + textoResumo + '</p>')

            var aLink = $('<a href="perfilUsuario.html?id=' + localStorage.getItem("id_user") + '" class="text-primary"> <br>Ver Perfil</a>')

            // pResumo.append(aLink)

            divItemContent.append(h5)
            // divItemContent.append(pResumo)
            divItemContent.append(aLink)

            divItemImg.append(img)

            divItemWrapper.append(divItemImg)
            divItemWrapper.append(divItemContent)


            divItem.append(divItemWrapper)

            listaUnv.append(divItem)



            qtd++

        }
    }
    if (qtd == 0) {
        var msg = $('<p style="margin:auto">Nenhum universitario participa desta proposta. Seja o primeiro!</p>')
        listaUnv.append(msg)
    }
}

function retornaCurso(curso) {
    curso = curso.data
    var div = $('<div style="border: 1px black solid; border-radius: 5px; width: 200px; display:flex; flex-direction:row; justify-content:center;">')
    var h6 = $('<h6 style="text-align: center;padding-top: 7px;"></h6>')

    div.addClass("fundoAzul");
    h6.text("Curso: " + curso.ds_nome)
    div.append(h6)





    $(div).insertAfter("#statos")


    // $('#categoriaProposta').text(curso.ds_nome)
}


function getImagem(dados) {

    var carrosel = $('#carroselImagem')
    for (var i = 0; i < dados.agrupadorArquivo.length; i++) {

        var divCarrosel;
        if (i == 0)
            divCarrosel = $('<div class="carousel-item slider-image item active">')
        else
            divCarrosel = $('<div class="carousel-item slider-image item ">')

        var img = $('<div class="item-wrapper"><img id="' + "imagem" + i + '" class="d-block w-100" src=""></div>')

        divCarrosel.append(img)

        carrosel.append(divCarrosel)

        $('#imagem' + i).attr("src", "data:image/jpg;base64," + dados.agrupadorArquivo[i].arquivo.bl_arquivo)
    }

}

function getDetalhesTecnicos(proposta) {

    var divDetalhes = $('#detalhesTecnicos')



    var divApoio2 = $('<div style="display: flex;flex-direction: row;">')

    var pInteg = $('<p style="line-height: 1.5; margin-left: 2px;"> ' + proposta.qt_participantes + '</p>')

    var integrantes = $('<b id="integrantes">Integrantes: </b>')

    divApoio2.append(integrantes)
    divApoio2.append(pInteg)

    var qtdTempo = 1
    var divApoio = $('<div style="display: flex;flex-direction: row;">')
    var pAnos = $('<p style="line-height: 1.5;  margin-left: 2px;"> ' + proposta.nr_duracao + ' meses</p>')
    var tempo = $('<b id="tempo">Tempo: </b>')

    divApoio.append(tempo)
    divApoio.append(pAnos)


    divDetalhes.append(divApoio2)

    divDetalhes.append($('<br>'))

    divDetalhes.append(divApoio)

}

function getContato() {

}



function getStatus(status) {

    // console.log(status)
    var div = $('<div style="border: 1px black solid; border-radius: 5px; width: 200px; display:flex;align-items: center; flex-direction:row; justify-content:center;">')
    var h6 = $('<h6 style="text-align: center;padding-top: 7px;"></h6>')
    div.append(h6)
    switch (status) {
        case ("AB"):
            div.addClass("fundoVerde");
            h6.text("Status: Aberto")
            break;
        case ("NE"):
            div.addClass("fundoAmarelo");
            h6.text("Status: Em Negociação")
            break;
        case ("DV"):
            div.addClass("fundoAzul");
            h6.text("Status: Em Desenvolvimento")
            break;
        case ("CA"):
            div.addClass("fundoVermelho");
            h6.text("Status: Cancelado")
            break;
        case ("CO"):
            div.addClass("fundoBranco");
            h6.text("Status: Concluido")
            div.append($('<div class="concluido" style="width: 30px;"></div>'))
            break;
        default:
            div.addClass("fundoBranco");
            h6.text("Status: Sem Status");
            break;
    }




    div[0].id = "statos"
    var secao = $('<div style="display:flex; justify-content: space-between ; margin-top:30px; margin-bottom:-50px"></div>')
    secao.insertAfter("#headerTitulo")
    $(secao).append(div)
    // $(div).insertAfter("#headerTitulo")
}

function retornaInstituicao(resp) {

    var card = $('#cardInstituicao')

    var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-4">')

    var divItemWrapper = $('<div class="item-wrapper">')

    var divItemImg = $('<div class="item-img">')

    var img = $('<img src="img/Instituições/furb.jpg">')

    var img = $('<img id="autora" src="data:image/jpg;base64,' + resp.data.agrupadorArquivo[0].arquivo.bl_arquivo + '">')
    // console.log(resp.data.agrupadorArquivo[0].arquivo.bl_arquivo)

    // $('#autora').attr("src", "data:image/jpg;base64," + resp.data.agrupadorArquivo[0].arquivo.bl_arquivo)

    // $('#autora').attr("src", "data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)


    var divItemContent = $('<div class="item-content">')

    var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + resp.data.ds_razao_social + '</strong></h5>')

    var texto = resp.data.ds_resumo

    var p = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + texto + '</p>')

    var divFooter = $('<div class="mbr-section-btn item-footer mt-2">')

    var aLink = $('<a href="instituicao.html?id=' + resp.data.nr_id + '" class="btn btn-primary item-btn display-7" >Saiba Mais</a>')



    divFooter.append(aLink)

    divItemContent.append(h5)

    divItemContent.append(p)

    divItemImg.append(img)

    divItemWrapper.append(divItemImg)

    divItemWrapper.append(divItemContent)

    divItemWrapper.append(divFooter)

    divItem.append(divItemWrapper)



    card.append(divItem)




}




function share() {
    var link = window.location.href;
    var sub = link.substr(link.indexOf('&'), link.length - link.indexOf('&'))
    link = link.replace(sub.toString(), "")

    console.log(link);
    if (navigator.share !== undefined) {
        navigator.share({
            title: 'Compartilhar Proposta',
            text: 'De uma olhada nessa proposta!!',
            url: link,
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }
}