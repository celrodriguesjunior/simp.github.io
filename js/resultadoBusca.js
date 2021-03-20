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

        var img = $('<img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg" alt="Mobirise">')

        var divCol23Cont = $('<div class="col-12 col-md">')

        var divCardBox = $('<div class="card-box">')

        var divRow = $('<div class="row">')

        var divColMd = $('<div class="col-md">')

        var titulo = dados[i].ds_nome

        var h6Titulo = $('<h6 class="card-title mbr-fonts-style display-5"><strong>' + titulo + '</strong></h6>')

        var resumo = dados[i].ds_desc_projeto

        var p = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')

        var divVisitar = $('<div class="col-md-auto"><div class="mbr-section-btn"><a href="proposta.html?id='+dados[i].nr_id+'" class="btn btn-primary display-4">Visitar Página</a></div></div>')

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

    /*
<div class="card">
                <div class="card-wrapper">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-4">
                            <div class="image-wrapper">
                                <img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg" alt="Mobirise">
                            </div>
                        </div>
                        <div class="col-12 col-md">
                            <div class="card-box">
                                <div class="row">
                                    <div class="col-md">
                                        <h6 class="card-title mbr-fonts-style display-5">
                                            <strong>Proposta 1</strong>
                                        </h6>
                                        <p class="mbr-text mbr-fonts-style display-7">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia, looked up one of the more obscure Latin words,
                                            consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                            word in classical literature, discovered the undoubtable source.
                                        </p>
                                    </div>
                                    <div class="col-md-auto">
                                        <div class="mbr-section-btn">
                                            <a href="proposta.html" class="btn btn-primary display-4">
                                                Visitar Página
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    */
}

