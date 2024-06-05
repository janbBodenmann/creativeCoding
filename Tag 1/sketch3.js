
let img;
let img1;

function preload() {
  img = loadImage("../grl2.jpg");
  img1 = loadImage("../merkat.jpg");
}

function setup() {
  cnv = createCanvas(1000, 1000);
  cnv.position(650, 250)
  pixelDensity(1);
  background(0, 0, 0, 0);
  image(img, 0 , 30, 600, 600);
  

  img.loadPixels();
  img1.loadPixels();

  for (let i = 0; i < img1.pixels.length; i += 4) {
    if (img.pixels[i + 1] % 2 == 0) {
      img1.pixels[i + 3] = 255;
    } else {
      img1.pixels[i + 3] = 0;
    }
  }

  img.updatePixels();
  img1.updatePixels();
  image(img1, 0, 30, 600, 650);

}



function draw() {


}


function draw() {}

