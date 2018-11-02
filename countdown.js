


var countDownDate =new Date("Sep 21, 2019 00:00:00").getTime();

var countDownfunction= setInterval(function() {

var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000* 60*60*24));
var hours = Math.floor((distance %(1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
var seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("demo").innerHTML =
days + "Dage" +
hours + "Timer" +
minutes + "Minuter" +
seconds + "sek";

if(distance <0) {
  clearInterval(countDownfunction);
  document.getElementById("demo").innerHTML = "wowowo";

}
},1000);
