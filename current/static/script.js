// function checkUsername(value){
//     $.post('/checkname/', {
//         username: value
//     }, function(data){
//        $('#error').text(data)
//     });
// }
// function checkEmail(value) {
//     $.post('/checkemail/',{
//         email: value
//     },  function (data){
//         $('#error1').text(data)
//     });
// }

// function submit(){
//     $.post('/', {
//         firstname: $('#username').val(),
//         password: $('#password').val(),
//         email: $('#email').val()
//     }, function(data){
//         $('#error').text(data)
//     });
// }

// var a=$('#yourform').serialize();
// $.ajax({
//     type:'post',
//     url:'receiver url',
//     data:a,
//     beforeSend:function(){
//         launchpreloader();
//     },
//     complete:function(){
//         stopPreloader();
//     },
//     success:function(result){
//          alert(result);
//     }
// });


function toggleUser(state){
    
    $.post('',
    {
      request : 'status',
      status: state
    }, function(msg){
      alert(msg);
    });
  }



  function checkEmail(value) {
    $.post('/checkemail/',{
        email: value
    },  function (data){
        $('#error1').text(data).style="red"
    });
}

