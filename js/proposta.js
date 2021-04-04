$(document).ready(function () {
    var url = new URL(window.location.href)


    var parametro = url.searchParams.get("nr_id_usuario")

    getProposta(url.searchParams.get("nr_id"), parametro === "null" ? "" : parametro)



})


function retornaProposta(proposta) {
    proposta = proposta.data

    $('#tituloProposta').append('<strong>' + proposta.ds_nome + '</strong>')

    getCurso(proposta.nr_id_curso)



    /*
    
                        
                    </div>
    */
    //proposta.cs_status

    getImagem(proposta)

    
    getStatus(proposta.cd_status)

    getInstituicao(proposta.nr_id_instituicao)


    $('#textoDescricao').text(proposta.ds_desc_projeto)

    getDetalhesTecnicos(proposta)



    $('#contatoProposta').text(proposta.ds_info_contatos)

    getContato(proposta)

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
    getImagemProposta(dados.nr_id).then(resp => {
        for (var i = 0; i < resp.data.length; i++) {

            var divCarrosel;
            if (i == 0)
                divCarrosel = $('<div class="carousel-item slider-image item active">')
            else
                divCarrosel = $('<div class="carousel-item slider-image item ">')

            var img = $('<div class="item-wrapper"><img id="'+"imagem"+i+'" class="d-block w-100" src=""></div>')

            // if(resp != null){
            // img = $('<img id="pop'+i+'">')
            // console.log("Resp: " + resp)

            
            // }else{
            // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
            // }




            divCarrosel.append(img)

            

            carrosel.append(divCarrosel)
            
            $('#imagem'+i).attr("src", "data:image/jpg;base64," + resp.data[i].arquivo.bl_arquivo)
        }
    })

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

    console.log(status)
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