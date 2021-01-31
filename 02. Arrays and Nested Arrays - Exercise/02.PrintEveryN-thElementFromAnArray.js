/**
 * 
 * @param {[]} arr 
 * @param {Number} step 
 */
function solve(arr, step) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i += step) {
        resultArr.push(arr[i]);
    }

    return resultArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));

console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));