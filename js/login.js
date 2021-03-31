$(document).ready(function () {
    localStorage.clear()
    // localStorage.setItem('id_user',null)
    localStorage.setItem("recomendacoes","0")
})


function logarSistema() {
    window.location.href = "index.html"
    localStorage.setItem('id_user','28')
   localStorage.setItem('isInstituicao', true)
    
}
