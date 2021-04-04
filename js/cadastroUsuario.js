var cidade;
$(document).ready(function () {
    if (localStorage.getItem("id_user") != null) {

        getUsuario(localStorage.getItem("id_user"))
    }

    setEvents()
    $('#universitario2').click()

    $("#cnpj").on("keyup", function (e) {
        $(this).val(
            $(this).val()
                .replace(/\D/g, '')
                .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1 $2 $3/$4-$5"));
    });

    $("#phone").on("keyup", function (e) {
        var r = $(this).val().replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 5) {
            r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
            r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            r = r.replace(/^(\d*)/, "($1");
        }
        $(this).val(r);
    });


    $("#cnpj").blur(function () {
        if ($(this).val() == "")
            if (!validarCNPJ($(this).val()))
                alert("CNPJ inválido")
    })


    getEstados()


    $('#states').change(e => {
        if ($('#states').val() != 0)
            getCidadesPorEstado($('#states').val())
    })

    getInstituicoes()
})

function retornaInstituicoes(dados) {

    for (var i = 0; i < dados.data.length; i++) {
        var opcao = $('<option value="' + dados.data[i].nr_id + '">' + dados.data[i].ds_razao_social + '</option>')
        $('#instituicao').append(opcao)
    }

    $('#instituicao').val(0)


}

function retornaUsuario(dados) {

    $('#labelTela').text("Editar Usuário")
    //console.log("chguei pra editar")
    dados = dados.data
    console.log(dados)
    console.log(dados.cd_cnpj)
    if (dados.cd_cnpj == null) {
        $('#universitario2').click()
        $('#tipo').remove()


        $('#email').val(dados.ds_email)
        $('#divSenha').hide()
        $('#fname').val(dados.ds_nome_exibido)
        $("#country").val(dados.nr_id_instituicao)

        //$('#states').val(dados.nr_id_estado)
        $("#fname").val(dados.ds_nome)
        $("#lname").val(dados.ds_sobrenome)
        $('#phone').val(dados.ds_telefone)
        $("#grau").val(dados.ds_grau)


    } else {
        $('#instutuicao2').click()
        $('#tipo').remove()


        $('#email').val(dados.ds_email)
        $('#divSenha').hide()
        $('#fname').val(dados.ds_nome_exibido)
        $('#razaoSocial').val(dados.ds_razao_social)
        $('#cnpj').val(dados.cd_cnpj)
        $("#ramo").val(dados.ds_ramo)
        $('#resumo').val(dados.ds_resumo)
        $('#detalhes').val(dados.ds_descricao)
        $('#phone').val(dados.ds_telefone)
        $('#hora').val(dados.ds_horario_funcionamento)
        //$('#cities').val(dados.nr_id_cidade)


        //console.log("inst.")
    }
    $('#states').val(dados.nr_id_estado)
    cidade = dados.nr_id_cidade
    getCidadesPorEstado($('#states').val())

    $('#confirmarEmail').hide()
    $('#confirmarSenha').hide()

}





function setEvents() {
    $('#instutuicao2').click(function () {
        //$('#universitario').val(false)
        filtrarInstituicao()
    })
    $('#universitario2').click(function () {
        //$('#instutuicao').val(false)
        filtrarUniversitario()
    })
}

function filtrarInstituicao() {
    $('#razaoSocialDiv').toggle(true)
    $('#cpnjDiv').toggle(true)
    $('#ramoDiv').toggle(true)
    $('#ramoDiv').toggle(true)
    $('#resumoDiv').toggle(true)
    $('#descricaoDiv').toggle(true)
    $('#horaDiv').toggle(true)
    $('#labelSobrenome').hide()
    $('#labelNome').text("Nome Fantasia")
    $('#grauDiv').hide()


    $('#instituicaoDiv').hide()


}

function filtrarUniversitario() {

    $('#razaoSocialDiv').hide()
    $('#cpnjDiv').hide()
    $('#ramoDiv').hide()
    $('#ramoDiv').hide()
    $('#resumoDiv').hide()
    $('#descricaoDiv').hide()
    $('#horaDiv').hide()
    $('#labelSobrenome').toggle(true)
    $('#labelNome').text("Primeiro Nome")


    $('#instituicaoDiv').toggle(true)
    $('#grauDiv').toggle(true)



}

function validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}


function pegarEstados(dados) {
    //console.log(dados)
    //<option value="1">FURB</option>

    for (var i = 0; i < dados.length; i++) {
        var opcao = $('<option value="' + dados[i].id + '">' + dados[i].nome + '</option>')
        $('#states').append(opcao)
    }

    $('#states').val(0)

}


function pegarCidades(dados) {
    //console.log(dados)
    $('#cities').empty()
    //cities

    for (var i = 0; i < dados.length; i++) {
        var opcao = $('<option value="' + dados[i].id + '">' + dados[i].nome + '</option>')
        $('#cities').append(opcao)
    }
    if (cidade == undefined)
        $('#cities').val(0)
    else
        $('#cities').val(cidade)

}

// {
//     "ds_email": "wilmello@furb.br",
//     "ds_senha": "1234",
//     "ds_nome_exibido": "William Mello",
//     "nr_id_instituicao": 1,
//     "nr_id_cidade": 1,
//     "nr_id_estado": 1,
//     "ds_nome": "William",
//     "ds_sobrenome": "Mello",
//     "ds_telefone": "(47) 9 9772-2325",
//     "ds_grau": "1"
//   }

function cadastrarUsuario() {

    var dados;

    if ($('#universitario2').is(':checked')) {
        dados = {
            
            "ds_email": $('#email').val(),
            //"ds_senha": $('#senha').val(),
            "ds_nome_exibido": $('#fname').val() + " " + $('#lname').val(),
            "nr_id_instituicao": Number($("#instituicao").val()),
            "nr_id_cidade": Number($('#cities').val()),
            "nr_id_estado": Number($('#states').val()),
            "ds_nome": $("#fname").val(),
            "ds_sobrenome": $("#lname").val(),
            "ds_telefone": $('#phone').val(),
            "ds_grau": $("#grau").val(),

        }
    } else {
        dados = {
            
            "ds_email": $('#email').val(),
            //"ds_senha": $('#senha').val(),
            "ds_nome_exibido": $('#fname').val(),
            "ds_razao_social": $('#razaoSocial').val(),
            "cd_cnpj": $('#cnpj').val(),
            "ds_ramo": $("#ramo").val(),
            "ds_resumo": $('#resumo').val(),
            "ds_descricao": $('#detalhes').val(),
            "ds_telefone": $('#phone').val(),
            "ds_horario_funcionamento": $('#hora').val(),
            "nr_id_cidade": Number($('#cities').val()),
            "nr_id_estado": Number($('#states').val())
        }
    }

    if (localStorage.getItem("id_user") != null) {
        dados.nr_id = localStorage.getItem("id_user")
        putUsuario(dados)
    } else {
        dados.ds_senha = $('#senha').val()
        postUsuario(dados)
    }


    



}

function respostaUsuario(resp) {
    alert("Cadastro feito com sucesso! Enviando imagem...")
    salvarImg(resp.data)
}

function salvarImg(usuario) {

    if ($('#img1')[0].files.length > 0) {
        var formData = new FormData();
        formData.append("fileinput", $('#img1')[0].files[0]);
        postImagemUsuario(usuario, formData)
    }

}

function sucessoImagemUsuario() {
    alert("Imagem enviadas com sucesso!")
    window.location.href = "login.html"
}