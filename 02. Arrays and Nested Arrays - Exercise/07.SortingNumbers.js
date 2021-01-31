/**
 * 
 * @param {[]} numArr 
 */
function solve(numArr) {
    numArr.sort((a, b) => a - b);

    let resultArr = [];

    while (numArr.length) {
        let firstElement = numArr.shift();
        if (firstElement !== undefined) {
            resultArr.push(firstElement);
        }

        let lastElement = numArr.pop();
        if (lastElement !== undefined) {
            resultArr.push(lastElement);
        }
    }

    return resultArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]));
console.log(solve([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]));
