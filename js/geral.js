$(document).ready(function () {
    var inst = localStorage.getItem('isInstituicao') === "true" ? true : false
    if (localStorage.getItem('isInstituicao') != null) {
        //console.log(inst)
        if (inst) {
            //console.log(localStorage.getItem('isInstituicao'))
            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="listaPropostaInstituicao.html">Ver Minhas Propostas</a></li>'))
            // $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="cadastroUsuario.html">Perfil</a></li>'))
            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="cadastroProposta.html">Cadastrar Proposta</a></li>'))

            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="instituicao.html?id=' + localStorage.getItem("id_instituicao") + '">Meu Perfil</a></li>'))

        } else {

            $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="perfilUsuario.html?id=' + localStorage.getItem("id_user") + '">Meu Perfil</a></li>'))

        }

        $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" onClick="logout()">Logout</a></li>'))
    }else{
        $('#menusCabecalho').append($('<li class="nav-item"><a class="nav-link link text-black display-4" href="loging.html"">Login</a></li>'))
    }

})


function logout() {

    document.location = "login.html"

}