const player = document.querySelector("lottie-player");
const tile = document.getElementById("tile");

tile.addEventListener("mouseenter", function () {
  player.play();
});
