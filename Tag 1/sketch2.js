let img;
let sizeSlider;

function setup() {
 let cnv = createCanvas(720, 620);
 cnv.position(410,100);
  pixelDensity(1);

  
  img = loadImage("../cat1.jpg");

 
  sizeSlider = createSlider(0, 700, 250);
  sizeSlider.position(30, 240);
}

function draw() {
  background(0);

  let newSize = sizeSlider.value();

  scale(newSize / 250);


  image(img, 0, 0, width, height);

 
  console.log(newSize);


  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
     
      pixels[index + 1] = mouseX; 
      pixels[index + 2] = mouseY; 
    }
  }
  updatePixels();
}
