
//link = "http://private-anon-7837cc2bc7-simp3.apiary-mock.com/"
link = "https://simprestapi.ddns.net:5001/"

//CURSOS
//GET cursos
function getCursos() {

    $.get(link + "cursos", function (resp, status) {

        if (status == 'success') {
            retornaCursos(resp)
        }
    })
}

//GET cursos
function getCursosPopulares() {

    $.get(link + "cursos", function (resp, status) {

        if (status == 'success') {
            retornaCursosPopulares(resp)
        } else {
            retornaCursosPopularesFalha()
        }
    })
}

//GET curso
function getCurso(id) {
    $.get(link + "curso/" + id, function (resp, status) {

        if (status == 'success') {
            retornaCurso(resp)
        }
    })

}

//GET curso
function getCursosBusca() {
    $.get(link + "cursos/", function (resp, status) {

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
    $.get(link + "universitarios", function (resp, status) {

        if (status == 'success') {
            retornaUniversitarios(resp)
        }
    })

}

//GET Universitarios
function getUniversitario(id) {
    $.get(link + "universitario/" + id, function (resp, status) {

        if (status == 'success') {
            retornaUniversitario(resp)
        }
    })

}


//POST Universitario
function postUniversitario(universitario) {

    $.ajax({
        url: link + "universitario", type: "POST", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Universitario
function putUniversitario(universitario) {

    $.ajax({
        url: link + "universitario", type: "PUT", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Universitario
function deleteUniversitario(id) {
    $.ajax({
        url: link + "universitario/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//PROPOSTAS
//GET Propostas
function getPropostas() {
    $.get(link + "propostas", function (resp, status) {

        if (status == 'success') {
            retornaPropostas(resp)
        }
    })

}

//GET Propostas por categoria
function getPropostasPorCategoria(idCategoria) {
    $.get(link + "propostas/categoria/" + idCategoria, function (resp, status) {

        if (status == 'success') {
            retornaPropostasPorCategoria(resp)
        }
    })

}

//GET Proposta
function getProposta(id, idUsuario) {
    $.get(link + "proposta?id=" + id + "&id_usuario=" + idUsuario, function (resp, status) {

        if (status == 'success') {
            retornaProposta(resp)
        }
    })

}

async function getProposta2(id, idUsuario) {
    return $.get(link + "proposta?id=" + id + "&id_usuario=" + idUsuario, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET Propostas por categoria
function getPropostasPorCategoria(idCategoria) {
    $.get(link + "propostas/categoria/" + idCategoria, function (resp, status) {

        if (status == 'success') {
            retornaPropostasPorCategoria(resp)
        }
    })

}


//POST Proposta
function postProposta(proposta) {

    $.ajax({
        url: link + "proposta", type: "POST", data:
            JSON.stringify(proposta), success: function (result) {
                retornaCadastroProposta(result)


            }, contentType: "application/json"
    });

}

//PUT Proposta
function putProposta(proposta) {

    $.ajax({
        url: link + "proposta", type: "PUT", data:
            JSON.stringify(proposta), success: function (result) {
                retornaEdicaoProposta(result)
            }, contentType: "application/json"
    });

}

//DELETE Proposta
function deleteProposta(id) {
    $.ajax({
        url: link + "proposta/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}

//GET Propostas por instituição
function getPropostasInstituicao(id) {
    // $.get(link+"propostas/instituicao/" + id, function (resp, status) {

    //     if (status == 'success') {
    //         retornaPropostasInstituicao(resp)
    //     }
    // })


    $.ajax({
        url: link + "propostas/instituicao/" + id, type: "GET", success: function (resp) {
            retornaPropostasInstituicao(resp)
        }, statusCode: {
            404: function () {
                retornaPropostasInstituicaoVazia()
            }
        }, contentType: "application/json"
    });


}

//PROPOSTAS
//GET Propostas por universitario
function getPropostasUniversitario(id, status) {
    $.ajax({
        url: link + "propostas/universitario/" + id + "?status=" + status, type: "GET", success: function (resp) {
            retornaPropostasUniversitario(resp)
        }, statusCode: {
            404: function () {
                nenhumaProsposta(status)
            }
        }, contentType: "application/json"
    });

}





//instituicoes
//GET instituicoes
function getInstituicoes() {
    $.get(link + "instituicoes", function (resp, status) {

        if (status == 'success') {
            retornaInstituicoes(resp)
        }
    })

}

//GET instituicao
function getInstituicao(id) {
    $.get(link + "instituicao/" + id, function (resp, status) {

        if (status == 'success') {
            retornaInstituicao(resp)
        }
    })

}


//POST instituicao
function postInstituicao(instituicao) {

    $.ajax({
        url: link + "instituicao", type: "POST", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT instituicao
function putinstituicao(instituicao) {

    $.ajax({
        url: link + "instituicao", type: "PUT", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE instituicao
function deleteInstituicao(id) {
    $.ajax({
        url: link + "instituicao/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//Recomendações
//GET recomendacao
function getRecomendacao(id) {
    $.get(link + "recomendacoes/" + id, function (resp, status) {

        if (status == 'success') {
            retornaRecomendacao(resp)
        }
    })

}

//Temas Populares
//GET TemasPopulares
function getTemasPopulares() {
    $.get(link + "temaspopulares", function (resp, status) {

        if (status == 'success') {
            retornaTemasPopulares(resp)
        }
    })

}


//Novos Temas
//GET NovosTemas
function getNovosTemas() {
    $.get(link + "novostemas", function (resp, status) {

        if (status == 'success') {
            retornaNovosTemas(resp)
        }
    })

}


//POST Usuario
function postUsuario(usuario) {

    $.ajax({
        url: link + "usuario", type: "POST", data:
            JSON.stringify(usuario), success: function (result) {
                respostaUsuario(result)
            }, contentType: "application/json"
    });

}

//POST Usuario
function putUsuario(usuario) {

    $.ajax({
        url: link + "usuario", type: "PUT", data:
            JSON.stringify(usuario), success: function (result) {
                respostaUsuarioEdicao(result)
            }, contentType: "application/json"
    });

}


//Localizacoes
//GET localizacao
function getLocalizacao(id) {
    $.get(link + "localizacao/" + id, function (resp, status) {

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

    $.get(link + "usuario/" + id, function (resp, status) {

        if (status == 'success') {
            retornaUsuario(resp)
        }
    })
}

//Log Alterações
//GET log
function getLog(id) {

    $.get(link + "acessosproposta/" + id, function (resp, status) {

        if (status == 'success') {
            retornaLog(resp)
        }
    })
}

function getPesquisaAvancada(dados) {

    $.ajax({
        url: link + "pesquisaavancada" + "?" + dados, type: "GET", success: function (resp) {
            retornaPesquisaAvancada(resp)
        }, statusCode: {
            404: function () {
                retornaPesquisaAvancadaVazia()
            }
        }, contentType: "application/json"
    });

}

function getAutenticacao(email, senha) {
    $.ajax({
        url: link + "usuario" + "?email=" + email + "&senha=" + senha, type: "GET", success: function (resp) {
            retornaAutenticacao(resp)
        }, statusCode: {
            404: function () {
                retornaAutenticacaoFalha()
            }
        }, contentType: "application/json"
    });
    // EX: http://simprestapi.ddns.net:5000/v1/usuario?email=univali@unv.br
}

function encodeQueryData(dados) {
    return new URLSearchParams(dados);
}

function postImagemProposta(proposta, imagem) {
    $.ajax({
        url: link + "imagem/proposta/" + proposta.nr_id + "?nr_agrupador=" + proposta.nr_agrupador_arquivo,//+"&ds_nome="+"Proposta_"+proposta.ds_nome,
        data: imagem,
        type: 'POST',
        success: function (resp) {
            sucessoImagemProposta(resp, proposta)
        },
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS

    });
}

async function getImagemProposta(id) {
    return $.ajax({
        url: link + "imagens/proposta/" + id, success: function (resp) {
            // retornaImagemProposta(resp)
            resp.data[1] = id
            return resp.data
        }, contentType: false,
        processData: false,
        statusCode: {
            404: function () {
                return null
            }
        }, contentType: "application/json"
    });

}

function postImagemUsuario(usuario, imagem, nomeArquivo) {
    $.ajax({
        url: link + "imagem/usuario/" + usuario.nr_id_usuario + "?nr_agrupador=" + usuario.nr_agrupador_arquivo + "&ds_nome=" + nomeArquivo,
        data: imagem,
        type: 'POST',
        success: function (resp) {
            sucessoImagemUsuario(resp)
        },
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS

    });
}

async function putImagemUsuario(arquivo, imagem) {
    $.ajax({
        url: link + "imagem/usuario?id_arquivo=" + arquivo.nr_id_arquivo + "&ds_nome=" + arquivo.arquivo.ds_nome,
        data: imagem,
        type: 'PUT',
        success: function (resp) {
            sucessoImagemUsuario(resp)
        },
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS

    });
}

async function getImagemUsuario(id) {
    return $.ajax({
        url: link + "imagens/usuario/" + id, success: function (resp) {
            resp.data[1] = id
            return resp
        }, contentType: false,
        processData: false,
        statusCode: {
            404: function () {
                return null
            }
        }, contentType: "application/json"
    });

}



function aceitarInteresse(idProposta, idUniversitario) {
    var dado = JSON.stringify({
        "nr_id_proposta": Number(idProposta),
        "nr_id_universitario": Number(idUniversitario)
    })

    $.ajax({

        url: link + "interesse?id_proposta=" + idProposta + "&id_universitario=" + idUniversitario, type: "PUT", data: dado
        , success: function (result) {
            sucessoAceite(result)
        },
        statusCode: {
            404: function () {
                return null
            },
            409: function () {
                return null
            }
        }, contentType: "application/json"
    });

}

//POST interesse
async function postInteresse(idProposta, idUniversitario) {
    //console.log("request")
    //console.log(idProposta)
    //console.log(idUniversitario)
    var dado = JSON.stringify({
        "nr_id_proposta": Number(idProposta),
        "nr_id_universitario": Number(idUniversitario)
    })
    //console.log(dado)
    return $.ajax({
        url: link + "interesse", type: "POST", data: dado
        , success: function (result) {
            // respostaInteresse(result)
            return result
        }, contentType: "application/json"
    });

}

//DELETE interesse
async function deleteInteresse(idProposta, idUniversitario) {
    var tt = link + "interesse?id_proposta=" + idProposta + "&id_universitario=" + idUniversitario
    //console.log(tt)
    return $.ajax({
        url: tt, type: "DELETE", success: function (result) {
            sucessoRemover(result)
        }, contentType: "application/json"
    });

}



function getInteressadosProposta(idProposta) {
    $.ajax({
        url: link + "proposta/interesse/" + idProposta, type: "GET", success: function (resp) {
            retornaInteressados(resp)
        }, statusCode: {
            404: function () {
                retornaInteressadosFalha()
            }
        }, contentType: "application/json"
    });

}

function getPropostasInteressado(idUniversitario) {
    $.ajax({
        url: link + "universitario/interesse/" + idUniversitario, type: "GET", success: function (resp) {
            retornaPropostasInteressado(resp)
        }, statusCode: {
            404: function () {
                retornaPropostasInteressadoFalha()
            }
        }, contentType: "application/json"
    });

}



// function getImagem() {
//     $.ajax({
//         url: link + "arquivo/1", success: function (resp) {
//             retornaImagem(resp)
//         }, contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
//         processData: false, // NEEDED, DON'T OMIT THIS
//         statusCode: {
//             404: function () {

//             }
//         }, contentType: "application/json"
//     });

// }

// function getImagemProposta(id) {
//     $.ajax({
//         url: link + "imagens/proposta/"+id, success: function (resp) {
//             retornaImagensProposta(resp)
//         }, contentType: false, 
//         processData: false,
//         statusCode: {
//             404: function () {

//             }
//         }, contentType: "application/json"
//     });

// }

// const dados = {
//     var1: 'value1',
//     var2: 'value2'
//   }

// const querystring = encodeQueryData(dados);

// searchParams.toString() === 'var1=value1&var2=value2'


