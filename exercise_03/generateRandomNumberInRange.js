/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * @param {number} limit
 * @returns {number}
 */

export function generateRandomNumberInRange(limit) {
    
    return Math.round(Math.random() * limit);
}
