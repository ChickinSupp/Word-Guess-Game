// Creating Array of words
const words = ['Baker', 'Real', 'Alien Workshop', 'Independent', 'Plan B', 'Element', 'Toy Machine', 'Almost', 'Enjoi'];

// Choose words randomly
let randWord = Math.floor(Math.random() * words.length);
let chosenWord = words[randWord];
let rightWord = [];
let wrongWord = [];
let underscore = [];


// Create underscores based on length of words
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push(' _ ')
    }
    return underscore;
}


// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    if(chosenWord.indexOf(keyword) > -1) {
         

    }

});


// Check if guess is right
// iF right push to correct array
// If wrong push to wrong array 