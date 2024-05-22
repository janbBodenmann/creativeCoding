
let img;
let img1;

function preload() {
  img1 = loadImage("../pessi22.png");
  img = loadImage("../pessilong.jpg");
}

function setup() {
  createCanvas(1000, 1000);
  pixelDensity(1);
  background(0, 0, 0, 0);
  image(img, 0 , 0, 0, 0);
  

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
  image(img1, 0, 0, 0, 0);
  

}



function draw() {
    // image(img1, 180, 30, 420, 600);

}


function draw() {}

