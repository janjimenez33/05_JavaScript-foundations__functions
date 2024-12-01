//import and execute
const generateRandomNumberInRange = require('./generateRandomNumberInRange');

const limit = 10;
const randomNumber = generateRandomNumberInRange(limit);

console.log(`Random number between 0 and ${limit}: ${randomNumber}`);