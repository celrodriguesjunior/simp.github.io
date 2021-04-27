$(document).ready(function () {

    getInstituicoes()

})

function retornaInstituicoes(dados) {
    
    var listaIntituicoes = $('#ListaInstituicoes')

    for (var i = 0; i < dados.data.length; i++) {

        var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-4">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemImg = $('<div class="item-img">')

        // var img = $('<img src="img/Instituições/furb.jpg">')

        



        var divItemContent = $('<div class="item-content">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + dados.data[i].ds_razao_social + '</strong></h5>')

        var texto = dados.data[i].ds_resumo

        var p = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + texto + '</p>')

        var divFooter = $('<div class="mbr-section-btn item-footer mt-2">')

        var aLink = $('<a href="instituicao.html?id='+dados.data[i].nr_id+'" class="btn btn-primary item-btn display-7" >Saiba Mais</a>')

        
        // var img = $('<img id="inst'+dados.data[i].nr_id_usuario+'" src="">')
        var img = $('<img style="height:300px;width:400px" id="inst'+dados.data[i].nr_id_usuario+'" src="data:image/jpg;base64,' + (dados.data[i].agrupadorArquivo != null ? dados.data[i].agrupadorArquivo[0].arquivo.bl_arquivo + '">':'">'))

        divFooter.append(aLink)

        divItemContent.append(h5)

        divItemContent.append(p)

        divItemImg.append(img)
   
        // getImagemUsuario(dados.data[i].nr_id_usuario).then( v => {
            
        //     // img = $('<img id="pop'+i+'">')
        //     $('#inst'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
            
        //     // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
            
            
        // }).catch(() => {
        // })
        divItemWrapper.append(divItemImg)

        divItemWrapper.append(divItemContent)

        divItemWrapper.append(divFooter)

        divItem.append(divItemWrapper)

        // console.log(divItem)

        listaIntituicoes.append(divItem)


    }

    function saibaMais(){

    }


}