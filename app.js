let time = document.getElementById("current-time");

setInterval(() =>{
let d = new Date();

var monthNames = ["Jan,", "Feb,", "Mar,", "Apr,", "May,", "Jun,", "Jul,", "Aug,", "Sep,", "Oct,", "Nov,", "Dec,"];
var theMonth = d.getMonth();
var nameOfMonth = monthNames[theMonth];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var theDay = d.getDay();
var nameOfDay = dayNames[theDay];
var theDate = d.getDate();

document.getElementById('day').innerText = nameOfMonth;
document.getElementById('day2').innerText = nameOfDay;
document.getElementById('day3').innerText = theDate;
time.innerHTML = d.toLocaleTimeString();
},1000)
 


 