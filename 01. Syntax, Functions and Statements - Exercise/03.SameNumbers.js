function printInfo(num) {
    num = num.toString();
    let firstNumber = num[0];
    let sum = Number(firstNumber);
    let areAllNumbersSame = true;

    for (let i = 1; i < num.length; i++) {
        let currentNumber = num[i];
        if (firstNumber !== currentNumber) {
            areAllNumbersSame = false;
        }
        sum += Number(currentNumber);
    }

    console.log(areAllNumbersSame);
    console.log(sum);
}

printInfo(2222222);
printInfo(1234);