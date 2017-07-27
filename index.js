var minutes = 0;
var seconds = 0;
var brk = 5;
var timemin = 25;
var timesec = '00';
var sound = new Audio("demonstrative.mp3");
var timerOn = false;
var time = timemin + ':' + timesec;
$(document).ready(function(){
  bindClickHandlers();
  $(".timer").text(time);
});
function bindClickHandlers(){
  $("#breakinc").click(brkinc);
  $("#breakdec").click(brkdec);
  $("#timeinc").click(timeinc);
  $("#timedec").click(timedec);
  $(".timer").click(startTimer);
}
function updateTime(){
  time = timemin + ':' + timesec;
  $(".timer").text(time);
}
function brkinc(){
  if(parseInt($("#break").text()) > 49){
  }
  else{$("#break").text(' ' +((parseInt($("#break").text()))+1) + ' ');
}};

function brkdec(){
  if(parseInt($("#break").text()) == 1){
  }
  else{$("#break").text(' ' +((parseInt($("#break").text()))-1) + ' ');
}};
function timeinc(){
  if(parseInt($("#timer").text()) > 59){}
  else{
    $("#timer").text(" " + ((parseInt($("#timer").text())) +1));
  }
  timemin=parseInt($("#timer").text());
  updateTime();
};
function timedec(){
  if(parseInt($("#timer").text()) == 1){
  }
  else{$("#timer").text(' ' +((parseInt($("#timer").text()))-1));}
  timemin = parseInt($("#timer").text());
  updateTime();
};
function workTimer(){
  if(timesec == '00' && timemin !== 0){
    timesec = '59';
    timemin -= 1;
  }
  else if(timemin === 0 && timesec=="00"){
    $(".session").text('Break!');
  }
}
function startTimer(){
  if(timerOn === false){
    $("#breakinc").off('click');
    $("#breakdec").off('click');
    $("#timeinc").off('click');
    $("#timedec").off('click');
    timerOn = true;

  }
  else{
    bindClickHandlers();
    timerOn = false;
  }
}
