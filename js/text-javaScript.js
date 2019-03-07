$(function(){
    add_ower();
    // editar();
})

function add_ower(){   
    $('#add-owner').click(function(ev){
        ev.preventDefault();
         var name = $('input[id=name_owner]');
         var surname = $('input[id=surname_owner]');
         var adress = $('input[id=adress_owner]');
         var telephone = $('input[id=telephone_owner]');
         $('#body-table-owner').append(
            "<tr>"+
                "<td>"+name.val()+"</td>"+               
                "<td>"+surname.val()+"</td>"+
                "<td>"+adress.val()+"</td>"+
                "<td>"+telephone.val()+"</td>"+
                "<td><button name='add-pet' class='add_pet btn btn-outline-secondary'>agregar mascota</button></td>"+
            "</tr>"
        );
         name.val(null);
         surname.val(null);
         adress.val(null);
         telephone.val(null);
    });
}


    // hola();
    // add_owner();


