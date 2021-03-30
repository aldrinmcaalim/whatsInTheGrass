// Grab image
const image = document.querySelector("img");

// Add event listener to image
// when image is clicked, change the image into a random animal
image.addEventListener("click", randomImage);

// create random image generator

function randomImage() {
  let random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    image.src = "images/cat.jpg";
  } else if (random === 2) {
    image.src = "images/hedgehog.jpg";
  } else if (random === 3) {
    image.src = "images/horses.jpg";
  } else if (random === 4) {
    image.src = "images/lion.jpg";
  } else if (random === 5) {
    image.src = "images/pug.jpg";
  } else if (random === 6) {
    image.src = "images/rabbit.jpg";
  }
}
