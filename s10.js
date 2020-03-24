var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");

one.addEventListener("mouseover", famv);
one.addEventListener("mouseout", famvO);
two.addEventListener("mouseover", tdos);
two.addEventListener("mouseout", tdosO);
three.addEventListener("mouseover", wpwc);
three.addEventListener("mouseout", wpwcO);

function famv() {
  one.src = "https://pkk.netlify.com/img/s10/1h.png";
}
function famvO() {
  one.src = "https://pkk.netlify.com/img/s10/1.png";
}
function tdosO() {
  two.src = "https://pkk.netlify.com/img/s10/2.png";
}
function tdos() {
  two.src = "https://pkk.netlify.com/img/s10/2h.png";
}
function wpwcO() {
  three.src = "https://pkk.netlify.com/img/s10/3.png";
}
function wpwc() {
  three.src = "https://pkk.netlify.com/img/s10/3h.png";
}
