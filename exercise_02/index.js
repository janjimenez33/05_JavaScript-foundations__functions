//import and execute
const getTotalWordsFromString = require('./getTotalWordsFromString');

const sentence = "This is a sample sentence to count words.";
const wordCount = getTotalWordsFromString(sentence);

console.log(`The total number of words is: ${wordCount}`);