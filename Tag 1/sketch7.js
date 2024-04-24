let circles = [];
const maxRadius = 40;
const minRadius = 10;

function setup() {
  createCanvas(1000, 1000);
  let startCircle = createRandomCircle();
  circles.push(startCircle);
  drawCircle(startCircle);

  let counter = 0;
  while (counter < 1000) {
    const newCircle = createRandomCircle();
    if (!isOverlapping(newCircle)) {
      drawCircle(newCircle);
      circles.push(newCircle);
      counter = 0;
    } else {
      counter++;
    }
  }
}

function drawCircle() {
  noStroke();
  fill(random(255), random(255), random(255), 100);
  ellipse(circle.x, circle.y, circle.radius * 2);
}
function createRandomCircle() {
  let x = random(width);
  let y = random(height);
  let radius = random(minRadius, maxRadius);
  return {
    x,
    y,
    radius,
  };
    
  
  
  function isOverlapping(){
    for(let i = 0; i < circles.length; i++){
        const d = dist(newCircle.x, newCircle.y, circles[i].x, circles[i].y);
        if (d < newCircle.radius + circles[i].radius) {
            return true;
        }
    }
    return false;
}













}
