function getLastKNumbers(n, k) {
    let array = [1];

    for (let i = 0; i < n - 1; i++) {
        let tempArray = array.slice(Math.max(array.length - k, 0));
        let currentSum = tempArray.reduce((acc, c) => acc + c, 0);

        array.push(currentSum);
    }

    return array;
}

console.log(getLastKNumbers(6, 3).join(", "));
console.log(getLastKNumbers(8, 2).join(", "));