function solve(...params) {
    let lengthSum = params.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
    let averageLength = Math.floor(lengthSum / params.length);
    console.log(lengthSum);
    console.log(averageLength);
}


solve('chocolate', 'ice cream', 'cake');