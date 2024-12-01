/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

export function checkCollectionHasElements(collection) {
    
    if (!Array.isArray(collection)) {
        throw new Error('Input must be an array');
    }
    return collection.length > 0;
}