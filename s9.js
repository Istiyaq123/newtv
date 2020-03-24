var img = document.getElementById("36");

img.addEventListener("mouseover",mouseOver);
img.addEventListener("mouseout",mouseOut);


function mouseOver() {
  img.src = "img/s9/36h.png";
}

function mouseOut() {
  img.src = "img/s9/36.png";
}