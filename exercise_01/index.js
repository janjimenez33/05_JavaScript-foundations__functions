//import and execute
const getDistanceFromThreshold = require('./getDistanceFromThreshold');

const value = 33;
const threshold = 5;
const distance = getDistanceFromThreshold(value, threshold);

console.log(`The distance from threshold is: ${distance}`);