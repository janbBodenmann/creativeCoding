let angle = 0;
let fontSize = 64;
let textColor;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textColor = color(255, 200, 0); // Textfarbe
  bgColor = color(0); // Hintergrundfarbe
}

function draw() {
  background(bgColor);
  
  // Texteigenschaften
  textSize(fontSize);
  fill(textColor);
  textAlign(CENTER, CENTER);
  
  // Animation des "Welcome"-Textes
  let offsetX = sin(angle) * 50;
  let offsetY = cos(angle) * 50;
  translate(width / 2, height / 2);
  text("Welcome", offsetX, offsetY);
  
  // Inkrementiere den Winkel für die Animation
  angle += 0.05;
  
  // Ändere die Textgröße im Laufe der Zeit
  fontSize = 64 + sin(angle) * 20;
  
  // Ändere die Hintergrundfarbe basierend auf der Mausposition
  let bgColorChange = map(mouseX, 0, width, 0, 255);
  bgColor = color(bgColorChange, 0, bgColorChange);
}
