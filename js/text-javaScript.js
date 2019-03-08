$(function(){
    // add_ower();
    // editar();
})

function add_ower(){   
    var name = $('input[id=name_owner]');
    var surname = $('input[id=surname_owner]');
    var adress = $('input[id=adress_owner]');
    var telephone = $('input[id=telephone_owner]');
    var new_element = $('<tr class="add_tr">'+
        "<td>"+name.val()+"</td>"+               
        "<td>"+surname.val()+"</td>"+
        "<td>"+adress.val()+"</td>"+
        "<td>"+telephone.val()+"</td>"+
        "<td><button name='add-pet' class='add-pet btn btn-outline-secondary'>agregar mascota</button></td>"+
        "</tr>")

    $('#body-table-owner').append(new_element);
    $('.add-pet').click(add_pet);
    name.val(null);
    surname.val(null);
    adress.val(null);
    telephone.val(null);
}
function add_pet(){  
    $('#form_pet').show();  

}


    // hola();
    // add_owner();


