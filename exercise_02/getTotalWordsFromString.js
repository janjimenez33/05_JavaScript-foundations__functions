/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Get the total number of words contained in one string.
 * @param {string} sentence
 * @returns {number}
 */

function getTotalWordsFromString(sentence) {

    if (typeof sentence !== 'string') {

      throw new Error('Input must be a string');
    }
  
    const words = sentence.trim().split(/\s+/);
    
    return words.length;
  }
  
  module.exports = getTotalWordsFromString;
