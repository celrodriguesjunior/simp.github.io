$(document).ready(function () {
    var url = new URL(window.location.href)
    
    
    getInstituicao(url.searchParams.get("id"))
    
})

function retornaInstituicao(dados) {
    var instituicao = dados.data


    getCabecalho(instituicao)

    getDescricao(instituicao)

    getPropostasInstituicao(instituicao.nr_id)

    getContatos(instituicao)

}



function getCabecalho(instituicao) {


    var cabecalho = $('#cabecalho')

    var h5Nome = $('<h5 class="mbr-title mbr-fonts-style display-2"><strong> '+ instituicao.ds_razao_social + '</strong></h5>')

    var resumo = instituicao.ds_resumo;

    var pText = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')

    var btnSaibaMais = $('<div class="mbr-section-btn pt-3"><a href="#descricao" class="btn btn-primary display-4">Saiba Mais</a></div>')

    cabecalho.append(h5Nome)
    cabecalho.append(pText)
    cabecalho.append(btnSaibaMais)

}

function getDescricao(instituicao) {

    var descricao = $('#descricaoTexto')

    var texto = instituicao.ds_descricao

    var pDescricao = $('<p class="mbr-text mbr-fonts-style display-7">' + texto + '</p>')

    descricao.append(pDescricao)

}


function retornaPropostasInstituicao(propostas) {
    var propostas = propostas.data
    var listaPropostas = $("#PropostasFeitas")

    for (var i = 0; i < propostas.length; i++) {

        var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-3">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemImg = $('<div class="item-img">')

        var img = $('<img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg">')

        var divItemContent = $('<div class="item-content">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + propostas[i].ds_nome + '</strong></h5>')

        var textoResumo = propostas[i].ds_desc_projeto

        var pResumo = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + textoResumo + '</p>')

        var aLink = $('<a href="proposta.html?id='+propostas[i].nr_id +'" class="text-primary"> <br>Saiba Mais</a>')

        pResumo.append(aLink)

        divItemContent.append(h5)
        divItemContent.append(pResumo)

        divItemImg.append(img)

        divItemWrapper.append(divItemImg)
        divItemWrapper.append(divItemContent)

        divItem.append(divItemWrapper)

        listaPropostas.append(divItem)
    }

}

function getContatos(instituicao) {

    getTelefone(instituicao)

    getEmail(instituicao)

    getLocalizacao(instituicao.nr_id_localizacao)
    

    getHorario(instituicao)

}

function getTelefone(instituicao) {

    var divTelefone = $('#telefone')

    var p = $('<p class="mbr-text mbr-fonts-style display-7">')

    

    var aLink = $('<a href="tel:+' + instituicao.ds_telefone + '" class="text-primary">' + instituicao.ds_telefone + '</a>')
    //dps ver para formatar telefone

    p.append(aLink)

    divTelefone.append(p)


}

function getEmail(instituicao) {

    var divEmail = $('#email')

    var p = $('<p class="mbr-text mbr-fonts-style display-7">')

    

    var aLink = $('<a href="mailto:' + instituicao.ds_email_contato + '" class="text-primary">' + instituicao.ds_email_contato + '</a>')

    p.append(aLink)

    divEmail.append(p)

    /*
    
    <p class="mbr-text mbr-fonts-style display-7">
                                    <a href="mailto:info@site.com" class="text-primary">info@site.com</a>
                                </p>
    */

}


function retornaLocalizacao(localizacao) {
    localizacao = localizacao.data

    var divEndereco = $('#endereco')

    

    var p = $('<p class="mbr-text mbr-fonts-style display-7">' + localizacao.ds_estado+' - '+localizacao.ds_cidade+'</p>')

    divEndereco.append(p)

}

function getHorario(instituicao) {

    var divHorario = $('#horaAtendimento')

    

    var p = $('<p class="mbr-text mbr-fonts-style display-7">' + instituicao.ds_horario_funcionamento + '</p>')

    divHorario.append(p)

}
