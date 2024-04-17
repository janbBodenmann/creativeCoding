let img;
let sizeSlider;

function setup() {
  createCanvas(720, 620);
  pixelDensity(1);

  // Bild laden
  img = loadImage("../cat1.jpg");

  // Erstelle den Skalierer (Slider)
  sizeSlider = createSlider(0, 700, 250);
  sizeSlider.position(30, 240);
}

function draw() {
  background(0);

  // Bestimme die aktuelle Größe basierend auf dem Slider-Wert
  let newSize = sizeSlider.value();

  // Anwenden der Skalierung
  scale(newSize / 250);

  // Bild zeichnen
  image(img, 0, 0, width, height);

  // Debug-Ausgabe des aktuellen Größenwerts
  console.log("Neue Größe:", newSize);

  // Bildpixel bearbeiten basierend auf der Mausposition
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      // Mausposition für die Farbkanäle verwenden
      pixels[index + 1] = mouseX; // Grüner Kanal
      pixels[index + 2] = mouseY; // Blauer Kanal
    }
  }
  updatePixels();
}
