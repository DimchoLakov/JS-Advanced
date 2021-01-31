function solve(num, firstOp, secondOp, thirdOp, fourthOp, fifthOp) {
    let number = Number(num);
    let operations = [firstOp, secondOp, thirdOp, fourthOp, fifthOp];

    for (let operation of operations) {
        if (operation === 'chop') {
            number /= 2;
        } else if (operation === 'dice') {
            number = Math.sqrt(number);
        } else if (operation === 'spice') {
            number++;
        } else if (operation === 'bake') {
            number *= 3;
        } else if (operation === 'fillet') {
            number = number - number * 0.2;
        }
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');