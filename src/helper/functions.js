/**
 * 
 * @param {Array} arr 
 * @param {string} key
 * @returns {Object}
 */
export const findBy = (arr, key , criteria = "id") => arr.find(elem => elem[criteria] === key)