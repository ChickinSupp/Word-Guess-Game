// Creating Array of words
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
wrongWord, 
underscore;

// Choose words randomly
randomWord = Math.floor(Math.random() * words.length);

chosenWord = words[randomWord];
rightWord = [];
wrongWord = [];
underscore = [];

var str;
// Create underscores based on length of words
let generateUnderscore = function() {
  for (let i = 0; i < chosenWord.length; i++) {
    underscore.push('_');   
  }
  return underscore;
};

document.querySelector('#underscore').textContent = generateUnderscore();


// addEventListener('keypress' (event) = function() {
//     right = String.fromCharCode(event.keycode).toLowerCase();
// });

// Get user guess

// Check if guess is right
    
// If right push to correct array
       
// replace underscore with right letter
       