var img = document.getElementById("36");

img.addEventListener("mouseover",mouseOver);
img.addEventListener("mouseout",mouseOut);


function mouseOver() {
  img.src = "https://pkk.netlify.com/img/s9/36h.png";
}

function mouseOut() {
  img.src = "https://pkk.netlify.com/img/s9/36.png";
}