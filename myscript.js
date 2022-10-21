

/*?

function clock(){
  var date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

setInterval(clock, 1000);
clock();

*/



/*function date(){
  let m = new Date(),
     m = (m.getMonth() < 10) ? '0' + m.getMonth() : m.getMonth;
  document.getElementById('month').innerHTML = m;
}
setInterval(date, 1000);
date();*/



function clock(){
  let date = new Date(),
      year  = date.getFullYear(),
      month  = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1),
      day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
      hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
      minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
      seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
  document.getElementById('month').innerHTML = day + '.' + month;
  document.getElementById('strok').innerHTML = day + '.' + month + '.' + year + ' - ' + day + '.' + month + '.' + year;
}
setInterval(clock, 1000);
clock();


/*
function date(){
  var m = new Date(),
     m = (m.getMonth() < 10) ? '0' + m.getMonth() : m.getMonth;
  document.getElementById('month').innerHTML = m;
  document.getElementById('clock').innerHTML = m;
}
setInterval(date, 1000);
date();
*/





