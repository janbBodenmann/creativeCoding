// Anpassbare Parameter
let cellSize = 10; // Größe der Zellen
let cols, rows;
let grid, nextGrid;
let colors = []; // Farben für lebende Zellen
let threshold = 0.5; // Schwellenwert für Zellaktivierung

function setup() {
 let cnv = createCanvas(600, 400);
 cnv.position(400,100);
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);

  // Farben für lebende Zellen definieren
  colors.push(color(255, 0, 0)); // Rot
  colors.push(color(0, 255, 0)); // Grün
  colors.push(color(0, 0, 255)); // Blau

  // Gitter initialisieren
  grid = createEmptyGrid(cols, rows);
  nextGrid = createEmptyGrid(cols, rows);
}

function draw() {
  background(255);
  updateGrid();
  displayGrid();
}

function updateGrid() {
  // Neuen Zustand berechnen
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let neighbors = countNeighbors(grid, i, j);
      let nextState = state;

      // Regeln des Game of Life anwenden
      if (state === 0 && neighbors === 3) {
        nextState = 1;
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        nextState = 0;
      }

      nextGrid[i][j] = nextState;
    }
  }

  // Aktuellen Zustand aktualisieren
  let temp = grid;
  grid = nextGrid;
  nextGrid = temp;
}

function displayGrid() {
  // Zellen zeichnen
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      let state = grid[i][j];

      // Farbe entsprechend dem Zellzustand setzen
      if (state === 1) {
        let index = (i + j) % colors.length; // Farbe basierend auf Index auswählen
        fill(colors[index]);
      } else {
        fill(255);
      }

      // Zelle zeichnen
      rect(x, y, cellSize, cellSize);
    }
  }
}

function createEmptyGrid(cols, rows) {
  let grid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0; // Leere Zellen erstellen
    }
  }
  return grid;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function mouseClicked() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);

  // Zufällige Form erzeugen
  let form = random(3);
  if (form < 1) {
    drawGlider(x, y);
  } else if (form < 2) {
    drawBlinker(x, y);
  } else {
    drawBlock(x, y);
  }
}

// Glider zeichnen
function drawGlider(x, y) {
  if (x + 2 < cols && y + 2 < rows) {
    grid[x][y + 1] = 1;
    grid[x + 1][y + 2] = 1;
    grid[x + 2][y] = 1;
    grid[x + 2][y + 1] = 1;
    grid[x + 2][y + 2] = 1;
  }
}

// Blinker zeichnen
function drawBlinker(x, y) {
  if (x + 2 < cols) {
    grid[x][y] = 1;
    grid[x + 1][y] = 1;
    grid[x + 2][y] = 1;
  }
}

// Block zeichnen
function drawBlock(x, y) {
  if (x + 1 < cols && y + 1 < rows) {
    grid[x][y] = 1;
    grid[x + 1][y] = 1;
    grid[x][y + 1] = 1;
    grid[x + 1][y + 1] = 1;
  }
}
