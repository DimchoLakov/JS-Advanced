function solve(matrix) {
    let rowSumsArray = [];
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((acc, c) => acc + c, 0);
        rowSumsArray.push(rowSum);
    }

    let colSumsArray = matrix.reduce(function (accumulator, currentElementArr) {
        currentElementArr.forEach(function (currentElement, index) {
            accumulator[index] = (accumulator[index] || 0) + currentElement;
        });
        return accumulator;
    }, []);

    let sumsArray = rowSumsArray.concat(colSumsArray);
    let isMatrixMagical = sumsArray.every(element => element === sumsArray[0]);
    console.log(isMatrixMagical);
}

solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

solve(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);