//Estados
//GET estados
function getEstados() {
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })

    /*
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

//Cidades
//GET cidadesPorEstado
function getCidadesPorEstado(idEstado) {
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+idEstado+"/municipios?orderBy=nome", function (resp, status) {

        if (status == 'success') {
            return resp
        }
    })
    //SCHEMA
    /*
    [
        {
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
        ] 

        */
}

