/**
 * 
 * @param {[]} array 
 */
function getTwoSmallestNumbers(array) {
    let result = array
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(" ");

    console.log(result);
}

getTwoSmallestNumbers([30, 15, 50, 5]);
getTwoSmallestNumbers([3, 0, 10, 4, 7, 3]);