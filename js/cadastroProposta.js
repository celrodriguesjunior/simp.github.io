var editar = false;
var url;

$(document).ready(function () {


    getCursos()
    url = new URL(window.location.href)
    //console.log(url.searchParams.get("id"))



    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    });

})


function retornaCursos(dados) {
    // console.log(dados)
    //<option value="1">FURB</option>

    for (var i = 0; i < dados.data.length; i++) {
        var opcao = $('<option value="' + dados.data[i].nr_id + '">' + dados.data[i].ds_nome + '</option>')
        $('#categorias').append(opcao)
    }

    $('#categorias').val(0)


    if (url.searchParams.get("id") != undefined) {
        getProposta(url.searchParams.get("id"), "")
        // console.log("cheguei 1")
        $('#tituloPaginaProposta').text("Editar Proposta")
        editar = true;
    } else {
        a = []
        localStorage.setItem("universitarios", JSON.stringify(a))
        a = []
        localStorage.setItem("agrupadorArquivo", JSON.stringify(a))

    }

    // if (editar) {
    //     var opcao = 0



    //     for (let index = 0; index < $('#categorias')[0].options.length; index++) {

    //         if ($('#categorias')[0].options[index].value == dados.nr_id_curso) {
    //             opcao = index
    //         }



    //     }
    // }

}



function salvarProposta() {


    var cd = "AB"
    switch ($('#status').val()) {
        case "1":
            cd = "AB"
            break;
        case "2":
            cd = "NE"
            break;
        case "3":
            cd = "DV"
            break;
        case "4":
            cd = "CA"
            break;
        case "5":
            cd = "CO"
            break;

        default:
            break;
    }


    if (editar) {

        lista = JSON.parse(localStorage.getItem("agrupadorArquivo"))

        for (let i = 1; i < 4; i++) {
            if ($('#img' + i)[0].files.length > 0) {
                if (lista[i - 1] != null) {
                    lista.splice(i - 1, 1)
                }
            }
        }
        // console.log(lista)
        var dados = {
            "nr_id": Number(url.searchParams.get("id")),
            "nr_id_curso": Number($('#categorias').val()),
            "nr_id_instituicao": Number(localStorage.getItem("id_instituicao")),
            "ds_nome": $('#nomeProposta').val(),
            "ds_desc_projeto": $('#descricao').val(),
            "cd_status": cd,
            "ds_requisito": $('#requisitos').val(),
            "qt_participantes": Number($('#qtdeParticipantes').val()),
            "ds_info_contatos": $('#contato').val(),
            "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
            "nr_duracao": Number($('#duracao').val()),
            "universitarios": JSON.parse(localStorage.getItem("universitarios")),
            "agrupadorArquivo": lista
        }

        // console.log("update")
        console.log(dados)
        putProposta(dados)

    }
    else {
        var dados = {
            "nr_id_curso": Number($('#categorias').val()),
            "nr_id_instituicao": Number(localStorage.getItem("id_instituicao")),
            "ds_nome": $('#nomeProposta').val(),
            "ds_desc_projeto": $('#descricao').val(),
            "cd_status": cd,
            "ds_requisito": $('#requisitos').val(),
            "qt_participantes": Number($('#qtdeParticipantes').val()),
            "ds_info_contatos": $('#contato').val(),
            "ds_tipo": $('#tipo').val() == 1 ? "TCC" : "Projeto de Extensão",
            "dt_geracao": new Date(),
            "nr_duracao": Number($('#duracao').val()),
            "universitarios": JSON.parse(localStorage.getItem("universitarios")),
            "agrupadorArquivo": JSON.parse(localStorage.getItem("agrupadorArquivo"))
        }

        postProposta(dados)

    }


}


function retornaProposta(dados) {
    dados = dados.data
    var opcao = 0



    for (let index = 0; index < $('#categorias')[0].options.length; index++) {

        if ($('#categorias')[0].options[index].value == dados.nr_id_curso) {
            opcao = index
        }



    }



    http://127.0.0.1:5500/cadastroProposta.html?id=1
    //console.log("cheguei 2")

    // console.log(dados)
    $('#categorias')[0].selectedIndex = opcao,
        $('#nomeProposta').val(dados.ds_nome),
        $('#descricao').val(dados.ds_desc_projeto),
        $('#requisitos').val(dados.ds_desc_projeto),
        $('#qtdeParticipantes').val(dados.qt_participantes),
        $('#contato').val(dados.ds_info_contatos),
        dados.ds_tipo == "TCC" ? $('#tipo').val(1) : $('#tipo').val(2)
    switch (dados.cd_status) {
        case "AB":
            $('#status')[0].selectedIndex = 0
            break;
        case "NE":
            $('#status')[0].selectedIndex = 1
            break;
        case "DV":
            $('#status')[0].selectedIndex = 2
            break;
        case "CA":
            $('#status')[0].selectedIndex = 3
            break;
        case "CO":
            $('#status')[0].selectedIndex = 4
            break;

        default:
            $('#status').val(1)
            break;
    }

    if (dados.universitarios != null) {
        localStorage.setItem("universitarios", JSON.stringify(dados.universitarios))
    } else {
        a = []
        localStorage.setItem("universitarios", JSON.stringify(a))
    }

    if (dados.agrupadorArquivo != null) {
        localStorage.setItem("agrupadorArquivo", JSON.stringify(dados.agrupadorArquivo))
    } else {
        a = []
        localStorage.setItem("agrupadorArquivo", JSON.stringify(a))
    }

    if (dados.agrupadorArquivo != null) {


        //EXIBE AS IMAGENS ATUAIS DA PROPOSTA
        for (let i = 0; i < dados.agrupadorArquivo.length; i++) {
            var divItem = $('<div class="item features-image сol-12 col-md-6 col-lg-3">')

            var divItemWrapper = $('<div class="item-wrapper">')

            var divItemImg = $('<div class="item-img">')

            var img = $('<img id="imgs' + dados.agrupadorArquivo[i].arquivo.ds_nome + '" src="data:image/jpg;base64,' + dados.agrupadorArquivo[i].arquivo.bl_arquivo + '">')

            var h5 = $('<h5 class="item-title mbr-fonts-style display-7"><strong>Imagem ' + (i + 1) + '</strong></h5>')

            var aLink = $('<a class="text-primary" <br>Remover</a>')

            $(aLink).click(function () {
                removerImg(i, dados.agrupadorArquivo)
            }
            );

            var divItemContent = $('<div class="item-content">')

            divItemContent.append(aLink)

            divItemImg.append(img)

            divItemWrapper.append(divItemImg)
            divItemWrapper.append(h5)
            divItemWrapper.append(divItemContent)

            divItem.append(divItemWrapper)

            $('#ImagensAtuais').append(divItem)


            $('#imagem' + (i + 1)).text("Substituir imagem " + (i + 1) + " por:")


        }

    }

    $('#duracao').val(dados.nr_duracao)
    if (dados.cd_status == "DV") {
        if (dados.universitarios != null) {

            for (let i = 1; i < dados.universitarios.length; i++) {
                // $('#Dados')[0]
                $($('#Universitario')[0].cloneNode(true)).insertBefore($('#Submit'))
            }

            for (let i = 0; i < dados.universitarios.length; i++) {

                carregaInteressados(dados)
            }
        }
    } else {
        $('#Universitario').hide()
    }
}

//FALTA FAZER
function removerImg(i, agrupadorArquivo) {
    if (confirm('Tem certeza que quer remover a imagem ' + agrupadorArquivo[i].arquivo.ds_nome + '? '+
    '\n A proposta será recarregada com as informações atuais!')) {
        agrupadorArquivo.splice(i, 1)
        localStorage.setItem("agrupadorArquivo", JSON.stringify(agrupadorArquivo))
        $('#ImagensAtuais').children()[i].remove()
        salvarProposta()
    } else {
        
    }

}

//FALTA FAZER
function carregaInteressados(dados) {

}

function retornaCadastroProposta(resp) {
    localStorage.removeItem("universitarios")
    localStorage.removeItem("agrupadorArquivo")
    resp = resp.data
    
    salvarImg(resp)
    // location.href = "proposta.html?nr_id=" + resp.data.nr_id + "&nr_id_usuario=" + localStorage.getItem("id_user")
}

function retornaEdicaoProposta(resp) {
    resp = resp.data
    
    salvarImg(resp)

}

// function salvarImg(id) {

//     if ($('#img1')[0].files.length > 0) {
//         var formData = new FormData();
//         formData.append("fileinput", $('#img1')[0].files[0]);
//         postImagemProposta(id, formData)

//     }


//     if ($('#img2')[0].files.length > 0) {
//         var formData2 = new FormData();
//         formData2.append("fileinput", $('#img2')[0].files[0]);
//         postImagemProposta(id, formData2)

//     }


//     if ($('#img3')[0].files.length > 0) {
//         var formData3 = new FormData();
//         formData3.append("fileinput", $('#img3')[0].files[0]);
//         postImagemProposta(id, formData3)
//     }



// }

function salvarImg(id) {
    var formData = new FormData();
    qtd = 0
    for (let i = 1; i < 4; i++) {



        if ($('#img' + i)[0].files.length > 0) {
            formData.append("fileInput", $('#img' + i)[0].files[0])
            qtd ++
        }
    }
    if(qtd > 0){
        alert("Alterações feitas com sucesso! Enviando imagens...")
        postImagemProposta(id, formData)
    }else{
        location.reload()
    }
    

}

function sucessoImagemProposta(resp, proposta) {
    alert("Imagens enviadas com sucesso!")
    location.reload()
    // location.href = "proposta.html?id=" + proposta.nr_id + "&id_usuario=" + localStorage.getItem("id_user")
}


