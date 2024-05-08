let circles = [];
let counter = 10;
let i = 1;

function setup() {
  createCanvas(500, 500);
  background(100, 0, 0);

  
  for (let i = 0; i < counter; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      diameter: 20,
      r: random(255),
      g: random(255),
      b: random(255),
      a: random(100, 255)
    };
    circles.push(circle);
  }
}

function draw() {

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(circle.r, circle.g, circle.b, circle.a);
    ellipse(circle.x, circle.y, circle.diameter);
  }
}

function mouseClicked() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.diameter / 2) {
      circles.splice(i, 1);
      break; 
    }
  }
  console.log(circles);
}
