function solve(num1, num2, num3) {
    let biggerOfFirstTwo = Math.max(num1, num2);
    let biggest = Math.max(biggerOfFirstTwo, num3);

    console.log(`The largest number is ${biggest}.`);
}

solve(5, -3, 16);