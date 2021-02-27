
//CURSOS
//GET cursos
function getCursos() {
    $.get("http://201.3.251.188:5000/api/v1/cursos", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET curso
function getCursos(id) {
    $.get("http://201.3.251.188:5000/api/v1/curso/"+ id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}




//UNIVERSITARIOS
//GET Universitarios
function getUniversitarios() {
    $.get("http://201.3.251.188:5000/api/v1/universitarios", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET Universitarios
function getUniversitario(id) {
    $.get("http://201.3.251.188:5000/api/v1/universitario/"+id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//POST Universitario
function postUniversitario(universitario) {

    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/universitario", type: "POST", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Universitario
function putUniversitario(universitario) {

    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/universitario", type: "PUT", data:
            JSON.stringify(universitario), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Universitario
function deleteUniversitario(id) {
    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/universitario/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//PROPOSTAS
//GET Propostas
function getPropostas() {
    $.get("http://201.3.251.188:5000/api/v1/propostas", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET Proposta
function getProposta(id) {
    $.get("http://201.3.251.188:5000/api/v1/proposta/"+id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//POST Proposta
function postProposta(proposta) {

    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/proposta", type: "POST", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT Proposta
function putProposta(proposta) {

    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/proposta", type: "PUT", data:
            JSON.stringify(proposta), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE Proposta
function deleteProposta(id) {
    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/proposta/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}



//instituicoes
//GET instituicoes
function getInstituicoes() {
    $.get("http://201.3.251.188:5000/api/v1/instituicoes", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}

//GET instituicao
function getInstituicao(id) {
    $.get("http://201.3.251.188:5000/api/v1/instituicao/"+id, function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

}


//POST instituicao
function postInstituicao(instituicao) {

    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/instituicao", type: "POST", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Cadastro feito com sucesso!")
            }, contentType: "application/json"
    });

}

//PUT instituicao
function putinstituicao(instituicao) {

    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/instituicao", type: "PUT", data:
            JSON.stringify(instituicao), success: function (result) {
                alert("Alteração feita com sucesso!")
            }, contentType: "application/json"
    });

}

//DELETE instituicao
function deleteInstituicao(id) {
    $.ajax({
        url: "http://201.3.251.188:5000/api/v1/instituicao/" + id, type: "DELETE"
        , success: function (result) {
            location.reload()
        }
        , contentType: "application/json"
    });

}


