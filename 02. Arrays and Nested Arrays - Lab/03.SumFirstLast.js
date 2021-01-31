function sumFirstAndLast(array) {
    return Number(array.shift()) + Number(array.pop());
}

console.log(sumFirstAndLast(['20', '30', '40']));