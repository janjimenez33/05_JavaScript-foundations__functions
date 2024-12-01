//import and execute
import getDistanceFromThreshold from './getDistanceFromThreshold.js';

const value = 33;
const threshold = 5;
const distance = getDistanceFromThreshold(value, threshold);

console.log(`The distance from threshold is: ${distance}`);