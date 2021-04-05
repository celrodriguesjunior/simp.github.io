$(document).ready(function () {
    localStorage.clear()
    // localStorage.setItem('id_user',null)
    localStorage.setItem("recomendacoes","0")
})


function logarSistema() {
    temEmail =false
    temSenha = false

    

    if(!$('#email')[0].value){
        $('#erroEmail')[0].hidden = false
    }else{
        temEmail =true
    }

    if(!$('#senha')[0].value){
        $('#erroSenha')[0].hidden = false
        
    }else{
        temSenha =true
    }

    

    if(temEmail & temSenha){
        $('#erroEmail')[0].hidden = true
        $('#erroSenha')[0].hidden = true
        $('#erroValidacao')[0].hidden = true
        getAutenticacao($('#email')[0].value, $('#senha')[0].value)
    }
   
    
}

function retornaAutenticacao(resp){
    usuario = resp.data
    localStorage.setItem('id_user', usuario.nr_id_usuario)
    localStorage.setItem('isInstituicao', usuario.ds_razao_social ? true : false)
    localStorage.setItem('id_instituicao', localStorage.getItem('isInstituicao') == "true" ? usuario.nr_id : "0")
    
    window.location.href = "index.html"
 }

 function retornaAutenticacaoFalha(){
    $('#erroValidacao')[0].hidden = false

 }
