var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");

one.addEventListener("mouseover", famv);
one.addEventListener("mouseout", famvO);
two.addEventListener("mouseover", tdos);
two.addEventListener("mouseout", tdosO);
three.addEventListener("mouseover", wpwc);
three.addEventListener("mouseout", wpwcO);
four.addEventListener("mouseover", doane);
four.addEventListener("mouseout", doaneO);

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
function doaneO() {
  three.src = "img/s10/4.png";
}
function doane() {
  three.src = "img/s10/4h.png";
}

