let number = 10; 
let sizeSlider; 

function setup() {
  cnv = createCanvas(400, 400);
  cnv.position(550, 100);
  background(40, 30, 93);


  sizeSlider = createSlider(1, 100, number); 
  sizeSlider.position(10, height + 10); 
  sizeSlider.input(updateNumber); 
}

function draw() {
  if (mouseIsPressed) {
    onClick();
  }
}

function onClick() {
  let x = random(width);
  let y = random(height);
  let radius = random(10, 50);
  fill(255);
  noStroke();
  circle(x, y, radius);
}

function updateNumber() {
  number = sizeSlider.value(); 
}

function mouseClicked() {
  createCircles(number); 
}

function createCircles(number) {
  for (let i = 0; i < number; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(10, 50);
    fill(45, 128, 121);
    noStroke();
    circle(x, y, radius);
  }
}
