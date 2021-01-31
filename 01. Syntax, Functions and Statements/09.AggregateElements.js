function aggregateElements(arr) {
    let totalSum = sum();
    let totalSumOfInversedNumbers = sumInversed();
    let concatenatedNumbers = concat();

    console.log(totalSum);
    console.log(totalSumOfInversedNumbers);
    console.log(concatenatedNumbers);

    function sum() {
        return arr.reduce((a, c) => a + c, 0);
    }

    function sumInversed() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += 1 / arr[i];
        }

        return sum;
    }

    function concat() {
        return arr.reduce((a, c) => a + c, '');
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);