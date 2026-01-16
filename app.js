console.log("Hello");

const thumbnailsDiv = document.querySelector(".thumbnails");
const bigDisplay = document.getElementById("bigDisplay");

const images = [
  {
    src: `https://images5.alphacoders.com/420/thumb-1920-420979.jpg`,
    alt: `symbiotic deer and cat`,
  },
  {
    src: `https://cdn.wallpapersafari.com/66/89/LH2IA9.jpg`,
    alt: `symbiotic dog and duck`,
  },
  {
    src: `https://images.hdqwalls.com/wallpapers/super-cute-animals.jpg`,
    alt: `symbiotic bunny and chicks`,
  },
];

const myImageData = {
  src: `https://images5.alphacoders.com/420/thumb-1920-420979.jpg`,
  alt: `symbiotic deer and cat`,
};

//function createThumbnails() {
//  images.forEach(function (image) {
//    const imageElement = document.createElement(`img`);
//    imageElement.src = image.src
//    imageElement.alt = image.alt
//    thumbnailsDiv.append(imageElement)
//  });
//}
// I gave up on using this method because it was confusing and I didn't know how to proceed. Using alternative method:

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const imageElement = document.createElement("img");
    imageElement.src = images[i].src;
    imageElement.alt = images[i].alt;

    imageElement.addEventListener("click", function () {
      console.log(images[i]);
      createBigImage(images[i]);
    });

    thumbnailsDiv.append(imageElement);
  }
}

createThumbnails();

function createBigImage(imageData) {
  bigDisplay.innerHTML = ``;
  const bigImage = document.createElement("img");

  bigImage.src = imageData.src;
  bigImage.alt = imageData.alt;

  bigDisplay.append(bigImage);
}

var img = document.getElementById(bigImage);
var width = img.clientWidth;
var height = img.clientHeight;
