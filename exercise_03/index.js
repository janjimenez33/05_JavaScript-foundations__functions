//import and execute
import { generateRandomNumberInRange } from './generateRandomNumberInRange.js';

const limit = 10;
const randomNumber = generateRandomNumberInRange(limit);

console.log(`Random number between 0 and ${limit}: ${randomNumber}`);