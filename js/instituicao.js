$(document).ready(function () {

    getInstituicao()

})

function getInstituicao() {

    getCabecalho()

    getDescricao()

    getPropostasFeitas()

    getContatos()

}



function getCabecalho() {


    var cabecalho = $('#cabecalho')

    var h5Nome = $('<h5 class="mbr-title mbr-fonts-style display-2"><strong>Nome Instituicao1</strong></h5>')

    var resumo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada vestibulum diam eu" +
        "consectetur. Maecenas faucibus cursus arcu ac interdum. Lorem ipsum dolor sit amet," +
        "consectetur adipiscing elit. In molestie nisl metus, a congue purus egestas at.";

    var pText = $('<p class="mbr-text mbr-fonts-style display-7">' + resumo + '</p>')

    var btnSaibaMais = $('<div class="mbr-section-btn pt-3"><a href="#descricao" class="btn btn-primary display-4">Saiba Mais</a></div>')

    cabecalho.append(h5Nome)
    cabecalho.append(pText)
    cabecalho.append(btnSaibaMais)

}

function getDescricao() {

    var descricao = $('#descricaoTexto')

    var texto = "Nunc hendrerit quis dolor vel tempor. Ut id magna ut ligula consequat placerat eget nec ipsum." +
        "Pellentesque eu fermentum tellus.Integer interdum semper varius.Fusce sed volutpat felis, nec" +
        "sodales mi.Proin sapien purus, porttitor ac diam ut, fermentum gravida sapien.Morbi tempus" +
        "sollicitudin eleifend.Duis sit amet pellentesque lorem.Suspendisse et aliquam sem.Maecenas" +
        "quis interdum turpis.Nunc non diam a ligula dignissim molestie at ac nisl.Donec facilisis arcu" +
        "in lacus porta, semper sagittis orci ullamcorper.Integer ultrices maximus massa, at malesuada" +
        "lorem accumsan vel.Aenean a mauris id sem sollicitudin placerat.Etiam accumsan orci ac sapien" +
        "consectetur, quis tempor dolor dictum."

    var pDescricao = $('<p class="mbr-text mbr-fonts-style display-7">' + texto + '</p>')

    descricao.append(pDescricao)

}


function getPropostasFeitas() {

    var listaPropostas = $("#PropostasFeitas")

    for (var i = 0; i < 4; i++) {

        var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-3">')

        var divItemWrapper = $('<div class="item-wrapper">')

        var divItemImg = $('<div class="item-img">')

        var img = $('<img src="img/temas/107435296-medical-chemistry-biomedicine-experiment.jpg">')

        var divItemContent = $('<div class="item-content">')

        var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>Proposta ' + i + '</strong></h5>')

        var textoResumo = "Etiam quis mollis nisl. Mauris tincidunt nisl lorem, quis porttitor enim malesuada in."

        var pResumo = $('<p class="mbr-text mbr-fonts-style mt-3 display-7">' + textoResumo + '</p>')

        var aLink = $('<a href="proposta.html" class="text-primary">Saiba Mais</a>')

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

function getContatos() {

    getTelefone()

    getEmail()

    getEndereco()

    getHorario()

}

function getTelefone() {

    var divTelefone = $('#telefone')

    var p = $('<p class="mbr-text mbr-fonts-style display-7">')

    var telefone = "991765793"

    var aLink = $('<a href="tel:+' + telefone + '" class="text-primary">' + telefone + '</a>')
    //dps ver para formatar telefone

    p.append(aLink)

    divTelefone.append(p)


}

function getEmail() {

    var divEmail = $('#email')

    var p = $('<p class="mbr-text mbr-fonts-style display-7">')

    var email = "info@site1.com"

    var aLink = $('<a href="mailto:' + email + '" class="text-primary">' + email + '</a>')

    p.append(aLink)

    divEmail.append(p)

    /*
    
    <p class="mbr-text mbr-fonts-style display-7">
                                    <a href="mailto:info@site.com" class="text-primary">info@site.com</a>
                                </p>
    */

}


function getEndereco() {

    var divEndereco = $('#endereco')

    var endereco = "R. Antônio da Veiga, 140 - Itoupava Seca, Blumenau"

    var p = $('<p class="mbr-text mbr-fonts-style display-7">' + endereco + '</p>')

    divEndereco.append(p)

}

function getHorario() {

    var divHorario = $('#horaAtendimento')

    var atendimento = "7:30 - 22:00"

    var p = $('<p class="mbr-text mbr-fonts-style display-7">' + atendimento + '</p>')

    divHorario.append(p)

}
