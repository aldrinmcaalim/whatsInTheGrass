// Grab image
const image = document.querySelector("img");
const backButton = document.querySelector("button");
const paragraph = document.querySelector("p");

// Add event listener to image
// when image is clicked, change the image into a random animal
image.addEventListener("click", randomImage);

// after the field is changed into random image, make sure you can't re-click unless we're back  in the "field" image
image.addEventListener("click", () => {
  image.classList.add("off");
});

// create button to revert into the original "field" image so we can click and get another random image
backButton.addEventListener("click", () => {
  image.src = "images/field.jpg";
  image.classList.remove("off");

  // instead of removing it, I created a blank "innerText" which just resets the paragraph field
  paragraph.innerText = "";
});

// create random image generator
function randomImage() {
  let random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    image.src = "images/cat.jpg";
    paragraph.append("Meow");
  } else if (random === 2) {
    image.src = "images/hedgehog.jpg";
    paragraph.append("Hedgehog noises");
  } else if (random === 3) {
    image.src = "images/horses.jpg";
    paragraph.append("Neigh");
  } else if (random === 4) {
    image.src = "images/lion.jpg";
    paragraph.append("roar");
  } else if (random === 5) {
    image.src = "images/pug.jpg";
    paragraph.append("boark");
  } else if (random === 6) {
    image.src = "images/rabbit.jpg";
    paragraph.append("weird screaming");
  }
}
