let textArray; 
let wordsArray = []; 
let markovChain = {}; 
let order = 10; 

function preload() {

  textArray = loadStrings("../shakespeare.txt");
}

function setup() {
  noCanvas();


  let textString = textArray.join('\n');

  wordsArray = textString.split(/\W+/);

  
  wordsArray = wordsArray.filter(word => word.length > 0);

 
  for (let i = 0; i < wordsArray.length - order; i++) {
    let gram = wordsArray.slice(i, i + order).join(' ');
    let nextWord = wordsArray[i + order];
    if (!markovChain[gram]) {
      markovChain[gram] = [];
    }
    markovChain[gram].push(nextWord);
  }
  
  console.log(markovChain);
}
