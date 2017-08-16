$(document).ready(function(){
  $('#failure').hide();
  $('#success').hide();

  $('button').click(function() {
    var user = $('input').val();
    if (oldEnough (user)) {
      $('#failure').hide();
      $('#success').show();
      revealImage();
    } else {
      $('#success').hide();
      $('#failure').show();
    }
  });
});


/* DO NOT MODIFY*/
function oldEnough(age){
  if (age >= 21) {
    return true;
  }
  else {
    return false;
  }
  }

function revealImage(){
  $("img").attr("src","./img/encrypted.jpg");
}
