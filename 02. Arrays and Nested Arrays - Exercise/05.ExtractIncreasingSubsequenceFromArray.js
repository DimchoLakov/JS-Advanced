function solve(arr) {
    let biggestNumber = Number.NEGATIVE_INFINITY;
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (currentNumber >= biggestNumber) {
            biggestNumber = currentNumber;
            resultArr.push(currentNumber);
        }
    }

    return resultArr;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));