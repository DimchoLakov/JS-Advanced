/**
 * 
 * @param {[]} numArray 
 */
function solve(numArray) {
    return numArray
        .filter((element, index, array) => index % 2 !== 0)
        .map(n => n * 2)
        .reverse();
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));