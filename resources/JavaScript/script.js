const words = [
  "Baker",
  "Real",
  "Alien Workshop",
  "Independent",
  "Plan B",
  "Element",
  "Toy Machine",
  "Almost",
  "Enjoi"
];

let randomWord, 
chosenWord, 
rightWord, 
wrongLetter, 
underscore, 
letterGuess;

let rightPush = false;

// Choose words randomly
randomWord = Math.floor(Math.random() * words.length);


chosenWord = words[randomWord];
chosenWord = chosenWord.toLowerCase();
console.log(chosenWord);
rightWord = [];
wrongLetter = [];
underscore = [];
var str;

// Create underscores based on length of words
let generateUnderscore = function() {
  for (let i = 0; i < chosenWord.length; i++) {
    underscore.push("_");
  }
  str = underscore.join(" ");
  return str;
};

document.querySelector("#underscore").textContent = generateUnderscore();

var letterChecker = function(guess) {
  for (let x = 0; x < chosenWord.length; x++) {
    if (guess === chosenWord[x]) {
      rightWord.push(guess);
      console.log(rightWord);
      rightPush = true;
    }
  }
  if (!rightPush) {
    wrongLetter.push(guess);
    console.log("wrong " + wrongLetter);
  }
};

document.onkeyup = function(event) {
  letterGuess = event.key;
  letterChecker(letterGuess);
};
// Get user guess
// Check if guess is right

// If right push to correct array

// replace underscore with right letter