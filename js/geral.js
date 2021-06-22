$(document).ready(function () {
    var inst = localStorage.getItem('isInstituicao') === "true" ? true : false
    if (localStorage.getItem('isInstituicao') != null) {
        //console.log(inst)
        if (inst) {
            //console.log(localStorage.getItem('isInstituicao'))
            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="listaPropostaInstituicao.html">Minhas Propostas</a></li>'))
            // $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="cadastroUsuario.html">Perfil</a></li>'))
            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="cadastroProposta.html">Cadastrar Proposta</a></li>'))

            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="instituicao.html?id=' + localStorage.getItem("id_instituicao") + '">Meu Perfil</a></li>'))

        } else {

            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="perfilUsuario.html?id=' + localStorage.getItem("id_user") + '">Meu Perfil</a></li>'))
            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="propostasInteressado.html?id='+localStorage.getItem("id_user")+'">Meus Interesses</a></li>'))
        }

        $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" onClick="logout()">Logout</a></li>'))
    } else {
        $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="login.html"">Login</a></li>'))
    }

    var rodape = $('<div class="col-12 col-md-6 col-lg-3 rodape">')
    var textRodape = $('<h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-7" style="color: black;">')
    var link = $('<a href="faq.html"><strong style="color:black;">Dúvidas? <br> Visite nosso FAQ clicando aqui!</strong></a>')
    textRodape.append(link)
    rodape.append(textRodape)
    $('.footer4').find('.row.mbr-white').append(rodape)

})


function logout() {

    document.location = "login.html"

}