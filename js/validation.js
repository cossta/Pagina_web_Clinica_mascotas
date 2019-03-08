$(function(){
    $('#form_pet').hide();
    $('#add-owner').click(val_owner);
    $('.add-pet').click(add_pet);
    $('#add-pet').click(val_pet);
});

function val_owner(){
    if($("#name_owner").val().length < 1 ||
       $("#surname_owner").val().length < 1
    ){
        alert("Hay un campo obligatorio de propietario vacio!");
        return false;
    }else{
        add_ower();
    }
}
function val_pet(){
    if($('#name_pet').val().length < 1){
        alert("Hay un campo obligatorio de propietario vacio!");  
        return false;

    }else if ($('#pet_type').val().trim() === '') {
        alert('Debe seleccionar una opción');
        return false;

    }else{
        add_ower();
    }
}


