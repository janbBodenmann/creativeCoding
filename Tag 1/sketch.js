function setup() {
  createCanvas(500, 500);
  background("gray");
  noFill();
  drawSquares();
}

function drawSquares() {
  for (let i = 0; i < 50; i++) {
    let x = random(0, width);
    let y = random(0, height);
    square(x, y, random(400));
  }
}

function mousePressed() {
  background("gray")
  let randomColor = color(random(255), random(255), random(255));
  stroke(randomColor);
  drawSquares(); 
}
