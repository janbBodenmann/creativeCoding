var angle;
var axiom = "X";
var sentence = axiom;
var len = 200;

var rules = [];
rules[0] = {
  a: "X",
  b: "F[+X][-X]FX"
};
rules[1] = {
  a: "F",
  b: "FF"
};

var button;

function generate() {
  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "-") {
      rotate(angle), stroke(50,79,79);
    } else if (current == "+") {
      rotate(-angle), stroke(185,211,238);
    } else if (current == "[") {
      push(), stroke(151,255,255);
    } else if (current == "]") {
      pop(), stroke(141,238,238);
    }
  }
}

function mousePressed(){
    
}

function setup() {
  createCanvas(400, 400);
  angle = radians(25);
  background(51);
  createP(axiom);
  turtle();
 
  

  button = createButton("Generate");
  button.position(width/2 - button.width/2, height/2 + 100);
  button.mousePressed(generate);
  

  button.style('background-color', '#4CAF50');
  button.style('border', 'none');
  button.style('color', 'white');
  button.style('padding', '15px 32px');
  button.style('text-align', 'center');
  button.style('text-decoration', 'none');
  button.style('display', 'inline-block');
  button.style('font-size', '16px');
  button.style('margin', '4px 2px');
  button.style('cursor', 'pointer');
}
