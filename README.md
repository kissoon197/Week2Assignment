Achieved requirements

1. Implementing responsive design methods: I think that my website works well on desktop, and better on mobile phone.
   https://prnt.sc/Vl67F4_NaxmX - This is a screenshot linking my website as viewed from my mobile phone (Samsung Galaxy S24). It's appearance is up to my personal standards.
2. By altering the size of some content using e.g 5vh on thumbnails and 100% width view, I was able to change the scale of the images and thumbnails proportionate to screen size, which changes the screen layout depending on accessed platform. I decided to add media queries to change the colour of the website background depending on screen size instead.

@media (max-width: 1024px) {

- {
  background-color: blueviolet;
  }
  }

With this media query, I was able to change the background colour to blueviolet for screens up to 1024 pixels wide. This means that small laptop screens, tablets, and mobile phones will be seeing this alternate background colour, whilst larger screens will see the default background colour as shown below.

- {
  background-color: rgb(47, 177, 252);
  color: white;
  }

3. All of my images were given an alt text with information describing the pictures.

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

4. I have used event handlers correctly, as all features work as intended on both mobile and desktop versions of the website.

I also had some personal goals to have the thumbnails swipe across the screen. I had originally succeeded in adding this feature, but I ended up with a problem that I never was able to fix and gave up. The problem was that the thumbnail image on the far left would always be clipped.

A small issue that I have with my desktop version of the website is that the main image displayed is too tall, meaning I can never see the complete and full image. I tried altering how this image appeared on my desktop screen, but fixing this issue would always result in other issues. Yet again, I gave up.
