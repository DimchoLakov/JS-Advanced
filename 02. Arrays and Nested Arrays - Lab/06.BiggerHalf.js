function getBiggestLastTwoElements(array) {
    array.sort((a, b) => a - b);;

    let slicedArray = array.slice(array.length / 2, array.length);

    return slicedArray;
}

console.log(getBiggestLastTwoElements([4, 7, 2, 5]));
console.log(getBiggestLastTwoElements([3, 19, 14, 7, 2, 19, 6]));
console.log(getBiggestLastTwoElements([17, 12, 15, 4, 2]));