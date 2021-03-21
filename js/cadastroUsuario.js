$(document).ready(function () {
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
})



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

    $('#cities').val(0)
}



function cadastrarUsuario() {

    var dados;

    if ($('#universitario2').is(':checked')) {
        dados = {
            "ds_email": $('#email').val(),
            "ds_senha": $('#senha').val(),
            "ds_nome_exibido": $('#fname').val() + " " + $('#lname').val(),
            "ds_ramo": $("#ramo").val(),
            "ds_resumo": $('#resumo').val()
        }
    } else {
        dados = {
            "ds_email": $('#email').val(),
            "ds_senha": $('#senha').val(),
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
        console.log("inst.")
    }



    console.log(dados)
    postUsuario(dados)

    //alert("usuario criado")
}