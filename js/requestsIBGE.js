//Estados
//GET estados
function getEstados() {
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome", function (resp, status) {

        if (status == 'success') {
            pegarEstados(resp)
        }
    })

    /*SCHEMA
    [
        {
        id:
        number
        
        Identificador da Unidade da Federação
        nome:
        string
        
        Nome da Unidade da Federação
        sigla:
        string
        
        Sigla da Unidade da Federação
        regiao:
        {
        id:
        number
        nome:
        string
        sigla:
        string
        ]
    */

}

//Estados
//GET estados por ID
function getEstado(id) {
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + id, function (resp, status) {

        if (status == 'success') {
            retornaEstado(resp)
        }
    })

    /*SCHEMA
    
       {
    "id": 33,
    "sigla": "RJ",
    "nome": "Rio de Janeiro",
    "regiao": {
        "id": 3,
        "sigla": "SE",
        "nome": "Sudeste"
        }
    }
    */

}




//Cidades
//GET cidades por ID
function getCidade(id) {
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/municipios/" + id, function (resp, status) {

        if (status == 'success') {
            retornaCidade(resp)
        }
    })

    /*SCHEMA
    {
    "id": 1600303,
    "nome": "Macapá",
    "microrregiao": {
        "id": 16003,
        "nome": "Macapá",
        "mesorregiao": {
            "id": 1602,
            "nome": "Sul do Amapá",
            "UF": {
                "id": 16,
                "sigla": "AP",
                "nome": "Amapá",
                "regiao": {
                    "id": 1,
                    "sigla": "N",
                    "nome": "Norte"
                }
            }
        }
    },
    "regiao-imediata": {
        "id": 160001,
        "nome": "Macapá",
        "regiao-intermediaria": {
            "id": 1601,
            "nome": "Macapá",
            "UF": {
                "id": 16,
                "sigla": "AP",
                "nome": "Amapá",
                "regiao": {
                    "id": 1,
                    "sigla": "N",
                    "nome": "Norte"
                }
            }
        }
    }
}
    */

}

//Cidades
//GET cidadesPorEstado
function getCidadesPorEstado(idEstado) {
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + idEstado + "/municipios?orderBy=nome", function (resp, status) {

        if (status == 'success') {
            pegarCidades(resp)
        }
    })
    //SCHEMA
    /*
    [
        id:
        number
        
        Identificador do município
        nome:
        string
        
        Nome do município
        microrregiao:
        { }
        regiao-imediata:
        { }
        {
        ] 

        */
}

