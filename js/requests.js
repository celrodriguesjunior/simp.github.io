
link = "https://private-51e72-simp3.apiary-mock.com/v1/"
// link = "http://simprestapi.ddns.net:5000/v1/"

//CURSOS
//GET cursos
function getCursos() {

    $.get(link+"cursos", function (resp, status) {

        if (status == 'success') {
            retornaCursos(resp)
        }
    })
}

//GET cursos
function getCursosPopulares() {

    $.get(link+"cursos", function (resp, status) {

        if (status == 'success') {
            retornaCursosPopulares(resp)
        }
    })
}

//GET curso
function getCurso(id) {
    $.get(link+"curso/" + id, function (resp, status) {

        if (status == 'success') {
            retornaCurso(resp)
        }
    })

}

//GET curso
function getCursosBusca() {
    $.get(link+"cursos/", function (resp, status) {

        if (status == 'success') {
            retornaCursos(resp)
            const customSelects = document.querySelectorAll("select");
            const deleteBtn = document.getElementById('delete')
            const choices = new Choices('select',
                {
                    searchEnabled: false,
                    itemSelectText: '',
                    removeItemButton: true,
                });
            deleteBtn.addEventListener("click", function (e) {
                e.preventDefault()
                const deleteAll = document.querySelectorAll('.choices__button')
                for (let i = 0; i < deleteAll.length; i++) {
                    deleteAll[i].click();
                }
            });
            
        }
    })

}



//aa

//UNIVERSITARIOS
//GET Universitarios
function getUniversitarios() {
    $.get(link+"universitarios", function (resp, status) {

        if (status == 'success') {
            retornaUniversitarios(resp)
        }
    })

}

//GET Universitarios
function getUniversitario(id) {
    $.get(link+"universitario/" + id, function (resp, status) {

        if (status == 'success') {
            retornaUniversitario(resp)
        }
    })

}


//POST Universitario
function postUniversitario(universitario) {

    $.ajax({
        url: link+"universitario", type: "POST", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Universitario
function putUniversitario(universitario) {

    $.ajax({
        url: link+"universitario", type: "PUT", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Universitario
function deleteUniversitario(id) {
    $.ajax({
        url: link+"universitario/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//PROPOSTAS
//GET Propostas
function getPropostas() {
    $.get(link+"propostas", function (resp, status) {

        if (status == 'success') {
            retornaPropostas(resp)
        }
    })

}

//GET Propostas por categoria
function getPropostasPorCategoria(idCategoria) {
    $.get(link+"propostas/categoria/" + idCategoria, function (resp, status) {

        if (status == 'success') {
            retornaPropostasPorCategoria(resp)
        }
    })

}

//GET Proposta
function getProposta(id, idUsuario) {
    $.get(link+"proposta?nr_id="+id+"&nr_id_usuario=" + idUsuario, function (resp, status) {

        if (status == 'success') {
            retornaProposta(resp)
        }
    })

}

//GET Propostas por categoria
function getPropostasPorCategoria(idCategoria) {
    $.get(link+"propostas/categoria/" + idCategoria, function (resp, status) {

        if (status == 'success') {
            retornaPropostasPorCategoria(resp)
        }
    })

}


//POST Proposta
function postProposta(proposta) {

    $.ajax({
        url: link+"proposta", type: "POST", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Proposta
function putProposta(proposta) {

    $.ajax({
        url: link+"proposta", type: "PUT", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Proposta
function deleteProposta(id) {
    $.ajax({
        url: link+"proposta/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}

//GET Propostas por instituição
function getPropostasInstituicao(id) {
    $.get(link+"propostas/instituicao/" + id, function (resp, status) {

        if (status == 'success') {
            retornaPropostasInstituicao(resp)
        }
    })

}





//instituicoes
//GET instituicoes
function getInstituicoes() {
    $.get(link+"instituicoes", function (resp, status) {

        if (status == 'success') {
            retornaInstituicoes(resp)
        }
    })

}

//GET instituicao
function getInstituicao(id) {
    $.get(link+"instituicao/" + id, function (resp, status) {

        if (status == 'success') {
            retornaInstituicao(resp)
        }
    })

}


//POST instituicao
function postInstituicao(instituicao) {

    $.ajax({
        url: link+"instituicao", type: "POST", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT instituicao
function putinstituicao(instituicao) {

    $.ajax({
        url: link+"instituicao", type: "PUT", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE instituicao
function deleteInstituicao(id) {
    $.ajax({
        url: link+"instituicao/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//Recomendações
//GET recomendacao
function getRecomendacao(id) {
    $.get(link+"recomendacoes/" + id, function (resp, status) {

        if (status == 'success') {
            retornaRecomendacao(resp)
        }
    })

}

//Temas Populares
//GET TemasPopulares
function getTemasPopulares() {
    $.get(link+"temaspopulares", function (resp, status) {

        if (status == 'success') {
            retornaTemasPopulares(resp)
        }
    })

}


//Novos Temas
//GET NovosTemas
function getNovosTemas() {
    $.get(link+"novostemas", function (resp, status) {

        if (status == 'success') {
            retornaNovosTemas(resp)
        }
    })

}


//POST Usuario
function postUsuario(usuario) {

    $.ajax({
        url: link+"usuario", type: "POST", data:
            JSON.stringify(usuario),success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}


//Localizacoes
//GET localizacao
function getLocalizacao(id) {
    $.get(link+"localizacao/" + id, function (resp, status) {

        if (status == 'success') {
            retornaLocalizacao(resp)
        }
    })

}

//Pesquisa Avançada
//GET PesquisaAvancada
// function getPesquisaAvancada(dados) {
//     $.get("http://simprestapi.ddns.net:5000/v1/pesquisaavancada" + "?" + dados, function (resp, status) {

//         if (status == 'success') {

//             retornaPesquisaAvancada(resp)
//         }
        
            
        
        
//     }).fail(function(){
//         // script = document.createElement("script");
//         // script.setAttribute("src", "resultadoBusca.js")
//         // document.querySelector('body').appendChild(script)
//         retornaPesquisaAvancadaVazia()
//     })
    
// }

//Usuario (Editar)
//GET usuario
function getUsuario(id) {

    $.get(link+"usuario/"+id, function (resp, status) {

        if (status == 'success') {
            retornaUsuario(resp)
        }
    })
}

//Log Alterações
//GET log
function getLog(id, proposta) {

    $.get(link+"log/"+id, function (resp, status) {

        if (status == 'success') {
            retornaLog(resp, proposta)
        }
    })
}

function getPesquisaAvancada(dados) {

    $.ajax({
        url: link+"pesquisaavancada" + "?" + dados, type: "GET", data:
            JSON.stringify(dados),success: function (resp) {
                retornaPesquisaAvancada(resp)
            },   statusCode: {
                404: function() {
                    retornaPesquisaAvancadaVazia()
                }
              }, contentType: "application/json"
    });

}

function encodeQueryData(dados) {
    return new URLSearchParams(dados);
}

function mandaImagem(imagem){
    $.ajax({
        url: link,
        data: imagem,
        type: 'POST',
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS
        
    });
}

// const dados = {
//     var1: 'value1',
//     var2: 'value2'
//   }

// const querystring = encodeQueryData(dados);

// searchParams.toString() === 'var1=value1&var2=value2'


