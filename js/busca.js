$(document).ready(function () {

    //getCategorias()

})


function getCategorias() {

    var selectCategoria = $('#selectCategorias')
    console.log(selectCategoria)

    for (var i = 0; i < 4; i++) {
        var option;
        if (i == 0)
            option = $('<option placeholder="" >Categoria ' + i + '</option>')
        else
            option = $('<option>Categoria' + i + '</option>')

        selectCategoria.append(option)

        console.log("add")
    }

    console.log(selectCategoria)


    /*

    */
}