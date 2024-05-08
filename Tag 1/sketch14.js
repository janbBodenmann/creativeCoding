let textArray;
let wordsArray;

function preload() {
  textArray = loadStrings("../test.txt");
}
function setup() {
  createCanvas(1000, 1000);
  background(220);

  let textString = textArray.join("\n")

  wordsArray = textString.split(/\W+/);

  wordsArray = wordsArray.filter((word) => word.length > 0);

  for (let i = 0; i < 100; i++) {
    fill(random(255));
    textSize(random(14, 28));
    text(textArray, random(0, width), random(0, height));
  }
}

function draw() {}
