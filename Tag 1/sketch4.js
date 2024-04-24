let xPos, yPos;
const stepSize = 10;

function setup() {
  createCanvas(400, 400);
  xPos = width / 2;
  yPos = height / 2;
  frameRate(5); 
}

function draw() {
  background(220);
  moveAgent();
  drawAgent();
}

function moveAgent() {
  let direction = floor(random(0, 8));
  switch (direction) {
    case 0: // NORTH
      yPos -= stepSize;
      break;
    case 1: // NORTHEAST
      xPos += stepSize;
      yPos -= stepSize;
      break;
    case 2: // EAST
      xPos += stepSize;
      break;
    case 3: // SOUTHEAST
      xPos += stepSize;
      yPos += stepSize;
      break;
    case 4: // SOUTH
      yPos += stepSize;
      break;
    case 5: // SOUTHWEST
      xPos -= stepSize;
      yPos += stepSize;
      break;
    case 6: // WEST
      xPos -= stepSize;
      break;
    case 7: // NORTHWEST
      xPos -= stepSize;
      yPos -= stepSize;
      break;
  }

  
  xPos = constrain(xPos, 0, width);
  yPos = constrain(yPos, 0, height);
}

function drawAgent() {
  loadPixels(); 
  clear(); 

  let pixelColor = get(xPos, yPos); 
  console.log(pixelColor);

  fill(pixelColor); 
  ellipse(xPos, yPos, 20, 20);
}
