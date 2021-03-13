$(document).ready(function () {
    setEvents()
    $('#universitario2').click()
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


    $('#instituicaoDiv').toggle(true)


}