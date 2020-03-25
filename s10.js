var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");

one.addEventListener("mouseover", famv);
one.addEventListener("mouseout", famvO);
two.addEventListener("mouseover", tdos);
two.addEventListener("mouseout", tdosO);
three.addEventListener("mouseover", wpwc);
three.addEventListener("mouseout", wpwcO);
four.addEventListener("mouseover", doane);
four.addEventListener("mouseout", doaneO);
five.addEventListener("mouseover", gtwit);
five.addEventListener("mouseout", gtwitO);
six.addEventListener("mouseover", dsfdb);
six.addEventListener("mouseout", dsfdbO);

function famv() {
  one.src = "img/s10/1h.png";
}
function famvO() {
  one.src = "img/s10/1.png";
}
function tdosO() {
  two.src = "img/s10/2.png";
}
function tdos() {
  two.src = "img/s10/2h.png";
}
function wpwc() {
  three.src = "img/s10/3h.png";
}
function wpwcO() {
  three.src = "img/s10/3.png";
}
function doaneO() {
  four.src = "img/s10/4.png";
}
function doane() {
  four.src = "img/s10/4h.png";
}
function gtwitO() {
  five.src = "img/s10/5.png";
}
function gtwit() {
  five.src = "img/s10/5h.png";
}
function dsfdbO() {
  six.src = "img/s10/6.png";
}
function dsfdb() {
  six.src = "img/s10/6h.png";
}