/**
 * 
 * @param {Array} arr 
 * @param {string} key
 * @returns {Object}
 */
export const findBy = (arr, criteria = "id", key) => arr.find(elem => elem[criteria] === key)