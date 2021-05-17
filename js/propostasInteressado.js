var id_aceite = null
var id_univ = null

$(document).ready(function () {
    url = new URL(window.location.href)
    id_univ = url.searchParams.get("id")
    getPropostasInteressado(url.searchParams.get("id"))
})

function retornaPropostasInteressado(dados) {
    dados = dados.data
    var listaResultados = $('#listaResultados')


    for (let i = 0; i < dados.length; i++) {



        var divCard = $('<div class="card">')

        var divCardWrapper = $('<div class="card-wrapper">')

        var divRowAlign = $('<div class="row align-items-center">')

        var divCol12Img = $('<div class="col-12 col-md-4">')

        var divImageWrapper = $('<div class="image-wrapper">')

        var img = $('<img style="height:300px;width:400px" id="propostas' + dados[i].nr_id + '" src="data:image/jpg;base64,' + (dados[i].agrupadorArquivo != null ? dados[i].agrupadorArquivo[0].arquivo.bl_arquivo + '">' : '">'))

        var divCol23Cont = $('<div class="col-12 col-md">')

        var divCardBox = $('<div class="card-box">')

        var divRow = $('<div class="row">')

        var divColMd = $('<div class="col-md">')

        var titulo = dados[i].ds_nome

        var h6Titulo = $('<h6 class="card-title mbr-fonts-style display-5"><strong>' + titulo + '</strong></h6>')

        var resumo = dados[i].ds_desc_projeto

        var p = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')


        var divVisitar = $('<div class="col-md-auto"><div class="mbr-section-btn"><a href="proposta.html?id=' + dados[i].nr_id + '" class="btn btn-primary display-4">Visualizar Proposta</a></div><div class="mbr-section-btn"><a id="aceitar' + dados[i].nr_id + '" class="btn btn-primary display-4">Remover Interesse</a></div></div>')





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

        listaResultados.append(divCard)

        $("#aceitar" + dados[i].nr_id).click(function () {

            id_proposta = dados[i].nr_id
            
            deleteInteresse(id_proposta, id_univ)
        }
        );

    }


}

function sucessoRemover(result){
    alert("Remoção realizada com sucesso! Um email foi enviado para a instituição sinalizando a remoção.")
    location.reload()

}

function retornaPropostasInteressadoFalha(resp) {
    var div = $('<div style="margin-top:50px;"><p style="text-align:center;">VOCÊ NÃO SINALIZOU NENHUM INTERESSE ATÉ AGORA. QUE TAL COMEÇAR A PESQUISAR POR PROPOSTAS?</p></div>')
    $('#content4-n').append(div)
}









