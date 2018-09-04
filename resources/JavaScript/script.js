// Creating Array of words
const words = ['Baker', 'Real', 'Alien Workshop', 'Independent', 'Plan B', 'Element', 'Toy Machine', 'Almost', 'Enjoi'];

// Choose words randomly
let ranWord = Math.floor(Math.random() * words.length);
let choosenWord = words[ranWord];
let underScores = [];
console.log(choosenWord);

// Create underscores based on length of words
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScores.push(' _ ')
    }
    return underScores;
}

console.log(generateUnderscore());

// Get users guess


// Check if guess is right
// iF right push to correct array
// If wrong push to wrong array 