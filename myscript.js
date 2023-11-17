

function clock(){
  let date = new Date(),
      year  = date.getFullYear(),
      month  = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1),
      day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
      hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
      minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
      seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('time').innerHTML = hours + ':' + minutes;
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
  document.getElementById('month').innerHTML = day + '.' + month;
  document.getElementById('strok').innerHTML = day + '.' + month + '.' + year + ' - ' + day + '.' + month + '.' + year;
}
setInterval(clock, 1000);
clock();


