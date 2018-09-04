// Creating Array of words
const words = ['Baker', 'Real', 'Alien Workshop', 'Independent', 'Plan B', 'Element', 'Toy Machine', 'Almost', 'Enjoi'];

// Choose words randomly
let ranWord = Math.floor(Math.random() * words.length);
let chosenWord = words[ranWord];
let underscore = [];
console.log(chosenWord);

// Create underscores based on length of words
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push(' _ ')
    }
    return underscore;
}

console.log(generateUnderscore());

// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    if(chosenWord)

});


// Check if guess is right
// iF right push to correct array
// If wrong push to wrong array 