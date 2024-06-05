class Glitch {
  constructor() {
    this.image = null;
    this.types = ['jpg', 'png', 'gif'];
  }

  loadType(type) {
    this.type = type;
  }

  loadImage(img) {
    this.image = img;
    this.image.loadPixels();
    this.originalPixels = this.image.pixels.slice(); // Backup der Original-Pixel
  }

  resetBytes() {
    if (this.image) {
      this.image.pixels = this.originalPixels.slice();
      this.image.updatePixels();
    }
  }

  randomBytes(num) {
    if (this.image) {
      this.image.loadPixels();
      for (let i = 0; i < num; i++) {
        let x = int(random(0, this.image.width));
        let y = int(random(0, this.image.height));
        let w = int(random(50, this.image.width - x)); // Vergrößern des Bereichs
        let h = int(random(10, 50)); // Vergrößern des Bereichs

        for (let j = 0; j < w; j++) {
          for (let k = 0; k < h; k++) {
            let index = 4 * ((y + k) * this.image.width + (x + j));
            let newIndex = 4 * (((y + h + k) % this.image.height) * this.image.width + (x + j));

            this.image.pixels[index] = this.image.pixels[newIndex];
            this.image.pixels[index + 1] = this.image.pixels[newIndex + 1];
            this.image.pixels[index + 2] = this.image.pixels[newIndex + 2];
            this.image.pixels[index + 3] = this.image.pixels[newIndex + 3];
          }
        }
      }
      this.image.updatePixels();
    }
  }

  buildImage(callback) {
    if (callback) {
      callback();
    }
  }
}

let glitch, typeCounter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);

  glitch = new Glitch();
  setupGlitch(); 
}

function draw() {
  if (glitch.image) {
    glitch.resetBytes();
    glitch.randomBytes(10); // Erhöhen der Anzahl von zufälligen Bytes
    glitch.buildImage(() => {
      background(0); 
      displayType(); 
    });
    image(glitch.image, width / 2, height / 2);
  }
}

function mousePressed() {
  typeCounter++;
  setupGlitch(); 
}

function setupGlitch() {
  loadImage('../m4.jpg', (im) => {
    glitch.loadType(glitch.types[typeCounter % glitch.types.length]); 
    glitch.loadImage(im);
  });
}

function displayType() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text('Press mouse to walkthrough image types \n' + glitch.types[typeCounter % glitch.types.length], width / 2, height / 2 + glitch.image.height / 2 + 20);
}
