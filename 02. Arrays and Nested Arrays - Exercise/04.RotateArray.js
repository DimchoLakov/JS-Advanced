/**
 * 
 * @param {[]} arr 
 * @param {Number} rotationTimes 
 */
function solve(arr, rotationTimes) {
    for (let i = 0; i < rotationTimes; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4'], 2);

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);