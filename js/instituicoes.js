$(document).ready(function () {

    getInstituicoes()

})

function retornaInstituicoes(dados) {
    
    var listaIntituicoes = $('#ListaInstituicoes')

    for (var i = 0; i < dados.data.length; i++) {

        var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-4">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemImg = $('<div class="item-img">')

        var img = $('<img src="img/Instituições/furb.jpg">')

        var divItemContent = $('<div class="item-content">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + dados.data[i].ds_razao_social + '</strong></h5>')

        var texto = dados.data[i].ds_resumo

        var p = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + texto + '</p>')

        var divFooter = $('<div class="mbr-section-btn item-footer mt-2">')

        var aLink = $('<a href="instituicao.html?id='+dados.data[i].nr_id+'" class="btn btn-primary item-btn display-7" >Saiba Mais</a>')

        

        divFooter.append(aLink)

        divItemContent.append(h5)

        divItemContent.append(p)

        divItemImg.append(img)

        divItemWrapper.append(divItemImg)

        divItemWrapper.append(divItemContent)

        divItemWrapper.append(divFooter)

        divItem.append(divItemWrapper)

        console.log(divItem)

        listaIntituicoes.append(divItem)


    }

    function saibaMais(){

    }




    /*
    
    <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="img/Instituições/furb.jpg">
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7"><strong>Instituição 1</strong></h5>

                            <p class="mbr-text mbr-fonts-style mt-3 display-7">
                                Pellentesque eget sapien vel ipsum efficitur maximus sed eget lorem. Praesent at leo
                                enim. Duis tempus orci dignissim leo iaculis, eu blandit elit euismod. Phasellus
                                convallis ipsum eu sem maximus semper et vel nunc. 
                            </p>
                        </div>
                        <div class="mbr-section-btn item-footer mt-2">
                            <a href="instituicao.html" class="btn btn-primary item-btn display-7" target="_blank">Saiba Mais</a>
                        </div>
                    </div>
                </div>
    */

}