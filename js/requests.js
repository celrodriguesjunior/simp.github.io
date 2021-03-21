
//CURSOS
//GET cursos
function getCursos() {

    $.get("http://simprestapi.ddns.net:5000/v1/cursos", function (resp, status) {

        if (status == 'success') {
            retornaCursos(resp)
        }
    })
}

//GET cursos
function getCursosPopulares() {

    $.get("http://simprestapi.ddns.net:5000/v1/cursos", function (resp, status) {

        if (status == 'success') {
            retornaCursosPopulares(resp)
        }
    })
}

//GET curso
function getCurso(id) {
    $.get("http://simprestapi.ddns.net:5000/v1/curso/" + id, function (resp, status) {

        if (status == 'success') {
            retornaCurso(resp)
        }
    })

}

//GET curso
function getCursosBusca() {
    $.get("http://simprestapi.ddns.net:5000/v1/cursos/", function (resp, status) {

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
    $.get("http://simprestapi.ddns.net:5000/v1/universitarios", function (resp, status) {

        if (status == 'success') {
            retornaUniversitarios(resp)
        }
    })

}

//GET Universitarios
function getUniversitario(id) {
    $.get("http://simprestapi.ddns.net:5000/v1/universitario/" + id, function (resp, status) {

        if (status == 'success') {
            retornaUniversitario(resp)
        }
    })

}


//POST Universitario
function postUniversitario(universitario) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/universitario", type: "POST", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Universitario
function putUniversitario(universitario) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/universitario", type: "PUT", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Universitario
function deleteUniversitario(id) {
    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/universitario/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//PROPOSTAS
//GET Propostas
function getPropostas() {
    $.get("http://simprestapi.ddns.net:5000/v1/propostas", function (resp, status) {

        if (status == 'success') {
            retornaPropostas(resp)
        }
    })

}

//GET Propostas por categoria
function getPropostasPorCategoria(idCategoria) {
    $.get("http://simprestapi.ddns.net:5000/v1/propostas/categoria/" + idCategoria, function (resp, status) {

        if (status == 'success') {
            retornaPropostasPorCategoria(resp)
        }
    })

}

//GET Proposta
function getProposta(id, idUsuario) {
    $.get("http://simprestapi.ddns.net:5000/v1/proposta?nr_id="+id+"&nr_id_usuario=" + idUsuario, function (resp, status) {

        if (status == 'success') {
            retornaProposta(resp)
        }
    })

}

//GET Propostas por categoria
function getPropostasPorCategoria(idCategoria) {
    $.get("http://simprestapi.ddns.net:5000/v1/propostas/categoria/" + idCategoria, function (resp, status) {

        if (status == 'success') {
            retornaPropostasPorCategoria(resp)
        }
    })

}


//POST Proposta
function postProposta(proposta) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/proposta", type: "POST", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Proposta
function putProposta(proposta) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/proposta", type: "PUT", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Proposta
function deleteProposta(id) {
    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/proposta/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}

//GET Propostas por instituição
function getPropostasInstituicao(id) {
    $.get("http://simprestapi.ddns.net:5000/v1/propostas/instituicao/" + id, function (resp, status) {

        if (status == 'success') {
            retornaPropostasInstituicao(resp)
        }
    })

}





//instituicoes
//GET instituicoes
function getInstituicoes() {
    $.get("http://simprestapi.ddns.net:5000/v1/instituicoes", function (resp, status) {

        if (status == 'success') {
            retornaInstituicoes(resp)
        }
    })

}

//GET instituicao
function getInstituicao(id) {
    $.get("http://simprestapi.ddns.net:5000/v1/instituicao/" + id, function (resp, status) {

        if (status == 'success') {
            retornaInstituicao(resp)
        }
    })

}


//POST instituicao
function postInstituicao(instituicao) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/instituicao", type: "POST", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT instituicao
function putinstituicao(instituicao) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/instituicao", type: "PUT", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE instituicao
function deleteInstituicao(id) {
    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/instituicao/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//Recomendações
//GET recomendacao
function getRecomendacao(id) {
    $.get("http://simprestapi.ddns.net:5000/v1/recomendacoes/" + id, function (resp, status) {

        if (status == 'success') {
            retornaRecomendacao(resp)
        }
    })

}

//Temas Populares
//GET TemasPopulares
function getTemasPopulares() {
    $.get("http://simprestapi.ddns.net:5000/v1/temaspopulares", function (resp, status) {

        if (status == 'success') {
            retornaTemasPopulares(resp)
        }
    })

}


//Novos Temas
//GET NovosTemas
function getNovosTemas() {
    $.get("http://simprestapi.ddns.net:5000/v1/novostemas", function (resp, status) {

        if (status == 'success') {
            retornaNovosTemas(resp)
        }
    })

}


//POST Usuario
function postUsuario(usuario) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/usuario", type: "POST", data:
            JSON.stringify(usuario),success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}


//Localizacoes
//GET localizacao
function getLocalizacao(id) {
    $.get("http://simprestapi.ddns.net:5000/v1/localizacao/" + id, function (resp, status) {

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


function getPesquisaAvancada(dados) {

    $.ajax({
        url: "http://simprestapi.ddns.net:5000/v1/pesquisaavancada" + "?" + dados, type: "GET", data:
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

// const dados = {
//     var1: 'value1',
//     var2: 'value2'
//   }

// const querystring = encodeQueryData(dados);

// searchParams.toString() === 'var1=value1&var2=value2'


