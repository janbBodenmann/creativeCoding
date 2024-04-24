let circles = [];
const maxRadius = 50;

function setup() {
  createCanvas(400, 400);
  let startCircle = createRandomCircle();
  circles.push(startCircle);
  drawCircle(startCircle);

  let counter = 0;
  while (counter < 5000) {
    let newCircle = createRandomCircle();
    if (!isOverlapping(newCircle)) {
      drawCircle(newCircle);
      circles.push(newCircle);
      counter = 0;
    } else {
      counter++;
    }
  }
}

function drawCircle(circle) {
  noStroke();
  fill(random(255), random(255), random(255), 100);
  ellipse(circle.x, circle.y, circle.radius * 2);
}

function createRandomCircle() {
  let x = random(width);
  let y = random(height);
  let radius = random(10, maxRadius);
  return {
    x: x,
    y: y,
    radius: radius,
  };
}
function isOverlapping(newCircle) {
  for (let i = 0; i < circles.length; i++) {
    const d = dist(newCircle.x, newCircle.y, circles[i].x, circles[i].y);
    if (d < newCircle.radius + circles[i].radius) {
      return true;
    }
  }
  return false;
}
