var id_aceite = null

$(document).ready(function () {
    url = new URL(window.location.href)

    getInteressadosProposta(url.searchParams.get("id"))
})

function retornaInteressados(dados) {
    dados = dados.data
    var listaResultados = $('#listaResultados')


    for (let i = 0; i < dados.length; i++) {



        var divCard = $('<div class="card">')

        var divCardWrapper = $('<div class="card-wrapper">')

        var divRowAlign = $('<div class="row align-items-center">')

        var divCol12Img = $('<div class="col-12 col-md-4">')

        var divImageWrapper = $('<div class="image-wrapper">')

        var img = $('<img style="height:300px;width:400px" id="interessados' + dados[i].nr_id_usuario + '" src="data:image/jpg;base64,' + (dados[i].agrupadorArquivo != null ? dados[i].agrupadorArquivo[0].arquivo.bl_arquivo + '">' : '">'))

        var divCol23Cont = $('<div class="col-12 col-md">')

        var divCardBox = $('<div class="card-box">')

        var divRow = $('<div class="row">')

        var divColMd = $('<div class="col-md">')

        var titulo = dados[i].ds_nome_exibido

        var h6Titulo = $('<h6 class="card-title mbr-fonts-style display-5"><strong>' + titulo + '</strong></h6>')

        var resumo = dados[i].ds_grau

        var p = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')


        var divVisitar = $('<div class="col-md-auto"><div class="mbr-section-btn"><a href="perfilUsuario.html?id=' + dados[i].nr_id_usuario + '" class="btn btn-primary display-4">Visualizar Perfil</a></div><div class="mbr-section-btn"><a id="aceitar' + dados[i].nr_id + '" class="btn btn-primary display-4">Aceitar Interesse</a></div></div>')





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

            id = dados[i].nr_id
            aceitaInteresse(id)
        }
        );

    }


}

function retornaInteressadosFalha() {
    var div = $('<div style="margin-top:50px;"><p style="text-align:center;">NENHUM INTERESSADO ATÉ AGORA</p></div>')
    $('#content4-n').append(div)
}

function aceitaInteresse(id) {

    id_aceite=id

    getProposta2(url.searchParams.get("id"), 0).then( v => {
        proposta = v.data
            
            

    console.log(id_aceite)
            
        }).catch(() => {
        })
        

}

function retornaProposta(resp) {
    
    
    
}







