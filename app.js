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
    alt: `dog and duck`,
  },
  {
    src: `https://images3.alphacoders.com/104/thumb-1920-104657.jpg`,
    alt: `bunny and puppy`,
  },
  {
    src: `https://wallpaper-house.com/data/out/10/wallpaper2you_442154.jpg`,
    alt: `puppy and kitten`,
  },
  {
    src: `https://www.hdwallpapers.in/download/white_dog_and_black_white_cat_kitten_on_green_grass_hd_cats_and_dogs-1920x1080.jpg`,
    alt: `dog looking at kitten`,
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
  bigImage.setAttribute(`class`, `niceSize`);
  bigDisplay.append(bigImage);
}
