let textArray;
let wordsArray = [];
let markovChain = {};
let order = 2;
let maxSentenceLength = 20; 

function preload() {
  textArray = loadStrings("../shakespeare.txt");
}

function setup() {
  noCanvas();
  
  let textString = textArray.join("\n");

  wordsArray = textString.split(/\W+/);

  wordsArray = wordsArray.filter((word) => word.length > 0);


  for (let i = 0; i < wordsArray.length - order; i++) {
    let gram = wordsArray.slice(i, i + order).join(" ");
    let nextWord = wordsArray[i + order];
    if (!markovChain[gram]) {
      markovChain[gram] = [];
    }
    markovChain[gram].push(nextWord);
  }

  
  for (let i = 0; i < 5; i++) { 
    let sentence = generateRandomSentence();
    console.log(sentence);
  }
}

function generateRandomSentence() {
  
  let start = int(random(Object.keys(markovChain).length));
  let currentGram = Object.keys(markovChain)[start];
  let sentence = currentGram;

  for (let i = 0; i < maxSentenceLength; i++) {
    let possibilities = markovChain[currentGram];
    if (!possibilities) {
      break;
    }
    let nextWord = random(possibilities);
    sentence += ' ' + nextWord;
    let words = sentence.split(' ');
    currentGram = words.slice(words.length - order, words.length).join(' ');
  }

  return sentence;
}
