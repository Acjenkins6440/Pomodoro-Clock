var minutes = 0;
var seconds = 0;
var brk = 5;
$("#break+").click(function(){
  if(((parseInt($("#break").text()))+1) > 9){
    $("#break").text(' ' +((parseInt($("#break").text()))+1))
  }
  else{
  $("#break").text(' ' +((parseInt($("#break").text()))+1) + ' ');
}});

$("#break-").click(function(){
  if(parseInt($("#break").text()) == 1){
  }
  else if(parseInt($("#break").text()) > 10){
    $("#break").text(' ' +((parseInt($("#break").text()))-1));
  }
  else{$("#break").text(' ' +((parseInt($("#break").text()))-1) + ' ');
}});
/* Do up and down arrows instead of + and -
https://www.w3schools.com/howto/howto_js_countdown.asp
https://www.w3schools.com/bootstrap/bootstrap_progressbars.asp*/
