
//CURSOS
//GET cursos
function getCursos() {
    $.get("simprestapi.ddns.net:5000/api/v1/cursos", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET curso
function getCursos(id) {
    $.get("simprestapi.ddns.net:5000/api/v1/curso/"+ id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//aa

//UNIVERSITARIOS
//GET Universitarios
function getUniversitarios() {
    $.get("simprestapi.ddns.net:5000/api/v1/universitarios", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET Universitarios
function getUniversitario(id) {
    $.get("simprestapi.ddns.net:5000/api/v1/universitario/"+id, function (resp, status) {

        if (status == 'success') {
        return resp
        }
    })

}


//POST Universitario
function postUniversitario(universitario) {

    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/universitario", type: "POST", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Universitario
function putUniversitario(universitario) {

    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/universitario", type: "PUT", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Universitario
function deleteUniversitario(id) {
    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/universitario/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//PROPOSTAS
//GET Propostas
function getPropostas() {
    $.get("simprestapi.ddns.net:5000/api/v1/propostas", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET Proposta
function getProposta(id) {
    $.get("simprestapi.ddns.net:5000/api/v1/proposta/"+id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//POST Proposta
function postProposta(proposta) {

    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/proposta", type: "POST", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Proposta
function putProposta(proposta) {

    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/proposta", type: "PUT", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Proposta
function deleteProposta(id) {
    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/proposta/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//instituicoes
//GET instituicoes
function getInstituicoes() {
    $.get("simprestapi.ddns.net:5000/api/v1/instituicoes", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET instituicao
function getInstituicao(id) {
    $.get("simprestapi.ddns.net:5000/api/v1/instituicao/"+id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//POST instituicao
function postInstituicao(instituicao) {

    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/instituicao", type: "POST", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT instituicao
function putinstituicao(instituicao) {

    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/instituicao", type: "PUT", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE instituicao
function deleteInstituicao(id) {
    $.ajax({
        url: "simprestapi.ddns.net:5000/api/v1/instituicao/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//Recomendações
//GET recomendacao
function getRecomendacao(id) {
    $.get("simprestapi.ddns.net:5000/api/v1/recomendacao/"+id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//Temas Populares
//GET TemasPopulares
function getTemasPopulares() {
    $.get("simprestapi.ddns.net:5000/api/v1/temaspopulares", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//Novos Temas
//GET NovosTemas
function getNovosTemas() {
    $.get("simprestapi.ddns.net:5000/api/v1/novostemas", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//Pesquisa Avançada
//GET PesquisaAvancada
function getPesquisaAvancada(dados) {
    $.get("simprestapi.ddns.net:5000/api/v1/pesquisaavancada"+"?"+encodeQueryData(dados), function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

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


