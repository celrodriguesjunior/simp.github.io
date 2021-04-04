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

    var h5Nome = $('<h5 class="mbr-title mbr-fonts-style display-2"><strong> ' + instituicao.ds_razao_social + '</strong></h5>')

    var resumo = instituicao.ds_resumo;

    var pText = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')
    var divBtn = $('<div class="mbr-section-btn pt-3">')
    var btnSaibaMais = $('<a href="#descricao" class="btn btn-primary display-4">Saiba Mais</a>')

    


    cabecalho.append(h5Nome)
    cabecalho.append(pText)
    divBtn.append(btnSaibaMais)
    cabecalho.append(divBtn)


    var url = new URL(window.location.href)

    var idpag = url.searchParams.get("id")

    if(localStorage.getItem("id_instituicao") == idpag){
        var btnEditarPerfil = $('<a href="cadastroUsuario.html?id=' + localStorage.getItem("id_user") + '" class="btn btn-primary display-4">Editar Perfil</a>')
        divBtn.append(btnEditarPerfil)
    }

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

    var qtd = 0
    for (var i = 0; i < propostas.length; i++) {
        if (propostas[i].cd_status == "AB") {
            var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-3">')

            var divItemWrapper = $('<div class="item-wrapper">')

            var divItemImg = $('<div class="item-img">')

            var img = $('<img id="abertas'+propostas[i].nr_id+'" src="">')
        
            getImagemProposta(propostas[i].nr_id).then( v => {
                
                // img = $('<img id="pop'+i+'">')
                $('#abertas'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
                
                // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
                
                
            })
            var divItemContent = $('<div class="item-content">')

            var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + propostas[i].ds_nome + '</strong></h5>')

            var textoResumo = propostas[i].ds_desc_projeto

            var pResumo = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + textoResumo + '</p>')

            var aLink = $('<a href="proposta.html?nr_id=' + propostas[i].nr_id + '&nr_id_usuario=' + localStorage.getItem("id_user") + '" class="text-primary"> <br>Saiba Mais</a>')

            pResumo.append(aLink)

            divItemContent.append(h5)
            divItemContent.append(pResumo)

            divItemImg.append(img)

            divItemWrapper.append(divItemImg)
            divItemWrapper.append(divItemContent)

            divItem.append(divItemWrapper)

            listaPropostas.append(divItem)
            qtd++
        }
    }
    if(qtd == 0){
        var msg = $('<p style="margin:auto">Nenhuma proposta encontrada</p>')
        listaPropostas.append(msg)
    }

    qtd = 0
    var listaPropostas = $("#PropostasFinalizadas")

    for (var i = 0; i < propostas.length; i++) {
        if (propostas[i].cd_status == "CO") {
            var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-3">')

            var divItemWrapper = $('<div class="item-wrapper">')

            var divItemImg = $('<div class="item-img">')


            var img = $('<img id="fin'+propostas[i].nr_id+'" src="">')
        
            getImagemProposta(propostas[i].nr_id).then( v => {
                
                // img = $('<img id="pop'+i+'">')
                $('#fin'+v.data[1]).attr("src","data:image/jpg;base64," + v.data[0].arquivo.bl_arquivo)            
                
                // img = $('<img src="123" id="pop'+i+'" alt="Sem Imagem">')
                
                
            })
            var divItemContent = $('<div class="item-content">')

            var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>' + propostas[i].ds_nome + '</strong></h5>')

            var textoResumo = propostas[i].ds_desc_projeto

            var pResumo = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + textoResumo + '</p>')

            var aLink = $('<a href="proposta.html?nr_id=' + propostas[i].nr_id + '&nr_id_usuario=' + localStorage.getItem("id_user") + '" class="text-primary"> <br>Saiba Mais</a>')

            pResumo.append(aLink)

            divItemContent.append(h5)
            divItemContent.append(pResumo)

            divItemImg.append(img)

            divItemWrapper.append(divItemImg)
            divItemWrapper.append(divItemContent)

            divItem.append(divItemWrapper)

            listaPropostas.append(divItem)
            qtd++
        }
    }
    if(qtd == 0){
        var msg = $('<p style="margin:auto">Nenhuma proposta encontrada</p>')
        listaPropostas.append(msg)
    }

}


function retornaPropostasInstituicaoVazia() {
    
    var listaPropostas = $("#PropostasFeitas")

    listaPropostas.append($('<p style="margin:auto">Nenhuma proposta encontrada</p>'))

    var listaPropostas = $("#PropostasFinalizadas")

    listaPropostas.append($('<p style="margin:auto">Nenhuma proposta encontrada</p>'))

}

function getContatos(instituicao) {

    getTelefone(instituicao)

    getEmail(instituicao)

    getEstado(instituicao.nr_id_estado)
    getCidade(instituicao.nr_id_cidade)





    getHorario(instituicao)

}

function retornaEstado(localizacao) {


    var divEndereco = $('#endereco')

    // ' - '+localizacao.ds_cidade+'

    var p = $('<p id="enderecoP" class="mbr-text mbr-fonts-style display-7">' + localizacao.nome + '</p>')

    divEndereco.append(p)
}



function retornaCidade(localizacao) {


    var divEndereco = $('#enderecoP')

    // ' - '+localizacao.ds_cidade+'

    var p = $('<p id="enderecoP" class="mbr-text mbr-fonts-style display-7">' + localizacao.nome + '</p>')

    divEndereco.append(p)
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



    var aLink = $('<a href="mailto:' + (instituicao.ds_email_contato ? instituicao.ds_email_contato : "") + '" class="text-primary">' + (instituicao.ds_email_contato ? instituicao.ds_email_contato : "") + '</a>')

    p.append(aLink)

    divEmail.append(p)

    /*
    
    <p class="mbr-text mbr-fonts-style display-7">
                                    <a href="mailto:info@site.com" class="text-primary">info@site.com</a>
                                </p>
    */

}



function getHorario(instituicao) {

    var divHorario = $('#horaAtendimento')



    var p = $('<p class="mbr-text mbr-fonts-style display-7">' + instituicao.ds_horario_funcionamento + '</p>')

    divHorario.append(p)

}
