var minutes = 0;
var seconds = 0;
var brk = 5;
var timemin = 25;
var timesec = '00';
var sound = new Audio("demonstrative.mp3");
var timerOn = false;
var time = timemin + ':' + timesec;
var sec1 = '';
var sec0 = '';
var x = '';
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
  displayBar();

}
function brkinc(){
  if(parseInt($("#break").text()) > 49){
  }
  else{$("#break").text(' ' +((parseInt($("#break").text()))+1) + ' ');
       if($(".session").text() == "Do Work"){}
       else{timesec = '00';
           timemin=parseInt($("#break").text());}
       updateTime();
}};

function brkdec(){
  if(parseInt($("#break").text()) == 1){
  }
  else{$("#break").text(' ' +((parseInt($("#break").text()))-1) + ' ');
       if($(".session").text() == "Do Work"){}
       else{timesec = '00';
           timemin=parseInt($("#break").text());}
       updateTime();
}};
function timeinc(){
  if(parseInt($("#timer").text()) > 59){}
  else{
    $("#timer").text(" " + ((parseInt($("#timer").text())) +1));
    if($(".session").text() == "Break!"){}
    else{timesec = '00';
        timemin=parseInt($("#timer").text());
        }
    updateTime();
  }


};
function timedec(){
  if(parseInt($("#timer").text()) == 1){
  }
  else{$("#timer").text(' ' +((parseInt($("#timer").text()))-1));
      if($(".session").text() == "Break!"){}
      else{timesec = '00';
          timemin = parseInt($("#timer").text());
          }
      updateTime();}

};
function workTimer(){

  //10:00 => 9:59 AKA minute changing
  if(timesec == '00' && timemin !== 0){
    timesec = '59';
    timemin -= 1;
  }
  //0:00 => break! => 5:00 AKA work to break
  else if(timemin === 0 && timesec=="00"){
    if($(".session").text() == 'Do Work'){
      $(".session").text('Break!');
      timemin = parseInt($("#break").text());
    }
    else{
      $(".session").text('Do Work');
      timemin = parseInt($("#timer").text());
    }
    timesec = '00';
    sound.play(); // <<<<<<  IMPORTANT IMPLIMENT THIS  <<<<<< different sound on github
   }
  else{
    //timemin = 2, timesec = '59' => '58'
    if (parseInt(timesec[1]) > 0){
      timesec  = timesec[0] + (parseInt(timesec[1]) - 1).toString();
    }
    //timesec = '50' => '49'
    else if(parseInt(timesec[1]) === 0 && parseInt(timesec[0]) > 0){
      timesec = (parseInt(timesec[0]) - 1).toString() + '9';
    }
  }
  updateTime();
}
function startTimer(){
  if(timerOn === false){
    x = setInterval(workTimer, 1000);
    $("#breakinc").off('click');
    $("#breakdec").off('click');
    $("#timeinc").off('click');
    $("#timedec").off('click');
    $(".timer").off('click');
    timerOn = true;
    $(".timer").click(startTimer);
  }
  else{
    clearInterval(x)
    $(".timer").off('click');
    bindClickHandlers();
    timerOn = false;
  }
}
function displayBar(){
  var secondsDec = parseInt(timesec)/60;
  var timeDisplay = timemin + secondsDec;
  if ($(".session").text() == 'Do Work'){
  var progress = ((timeDisplay/($("#timer").text())) * 100).toFixed(0) * 3;}
  else{var progress = ((timeDisplay/($("#break").text())) * 100).toFixed(0) * 3;}
  $(".progress-bar").css("width", (300 - progress) + 'px');
}
