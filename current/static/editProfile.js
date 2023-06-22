
/**
 * 
 * @param {string} input The Input That has the type file
 * @param {string} element The Id of the img that will display the selected Image
 */
function loadImgTo(input, element){
    let img = $('#'+element);

    let f = new FileReader();
    f.readAsDataURL(input.files[0]);
    f.onload = function(e) {
        img.attr('src', e.target.result);
    }
}

/**
 * Checks if the value is the same as the new password
 */
function checkPassword(value){
    password = $('#new_password').val();
 
    if(password == value){
        $('#password_check').text('');
        $('#update').prop('disabled' ,false); //Enable the Button
    }else{
        $('#password_check').text('Password does not match');
        $('#update').prop('disabled' ,true); //Disable the Button
    }
}
