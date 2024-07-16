let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let wordsWithN = [];
let wordsWithoutN = [];
for (let i = 0; i < letterSearch.length; i++) {
    let word = letterSearch[i];
    
    if (word.toLowerCase().includes('n')) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}
console.log("So'zlar 'n' harfi bilan: ", wordsWithN);
console.log("So'zlar 'n' harfi bilan emas: ", wordsWithoutN);
