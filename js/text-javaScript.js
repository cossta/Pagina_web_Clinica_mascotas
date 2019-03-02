$(function(){
    agregar();
    editar();
})

function agregar(){
    $('#add').on('click',function(ev){
        ev.preventDefault();
        var nombre = $('input[id=nombre]');
        var apellido = $('input[id=apellido]');
        $('#lista').append(
            "<tr>"+
                "<td>"+nombre.val()+"</td>"+               
                "<td>"+apellido.val()+"</td>"+
                "<td><button name='editar' class='editar'>Editar</button></td>"+
            "</tr>"
        );
        nombre.val(null);
        apellido.val(null);
    })   
}

function editar(){
    $('lista').on('click','editar',function(ev){
        ev.preventDefault();
        var tr = $(this).closest('tr');
        var tdNombre = tr.childer('td:nth-child(1)');
        var tdApellido = tr.childer('td:nth-child(2)');
        var tdEditar = tr.childer('td:nth-child(3)');
        tdNombre.html("input id='txtnombre' value='"+tdNombre+"'/>");
        tdApellido.html("input id='txtapellido' value='"+tdApellido+"'/>");
        tdEditar.html("<button class='guardar'>Guardar</button>");
    });
}
