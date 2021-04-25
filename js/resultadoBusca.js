$(document).ready(function () {
    var url = new URL(window.location.href)
    
    getPesquisaAvancada(url.searchParams.toString())
    
    

})

function retornaPesquisaAvancada(dados) {

    dados = dados.data
    var listaResultados = $('#listaResultados')

    for (var i = 0; i < dados.length; i++) {
        

    

        var divCard = $('<div class="card">')

        var divCardWrapper = $('<div class="card-wrapper">')

        var divRowAlign = $('<div class="row align-items-center">')

        var divCol12Img = $('<div class="col-12 col-md-4">')

        var divImageWrapper = $('<div class="image-wrapper">')

        
        var img = $('<img id="result'+dados[i].nr_id+'" src="">')

        
    getImagemProposta(dados[i].nr_id).then( v => {
            
        // img = $('<img id="pop'+i+'">')
        $('#result'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
        
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

        var divVisitar = $('<div class="col-md-auto"><div class="mbr-section-btn"><a href="proposta.html?id='+dados[i].nr_id+'&id_usuario='+(localStorage.getItem("id_user")?localStorage.getItem("id_user"):"")+'" class="btn btn-primary display-4">Visitar Página</a></div></div>')

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

    }
}


function retornaPesquisaAvancadaVazia() {
    var div = $('<div style="margin-top:50px;"><p style="text-align:center;">NENHUM RESULTADO OBTIDO</p></div>')
    $('#form8-7').append(div)

}