var bannerImg = document.getElementById("banner-img");

function moveBanner() {
  var leftPos = parseInt(bannerImg.style.left) || -100;
  leftPos++;
  if (leftPos > window.innerWidth) {
    leftPos = -bannerImg.width;
  }
  bannerImg.style.left = leftPos + "px";
}

setInterval(moveBanner, 10);

window.addEventListener("load", function() {
  alert("¡Bienvenido al consultorio cannábico!");
});