function printRectangle(count = 5) {
    for (let i = 0; i < count; i++) {
        console.log('* '.repeat(count).trim());
    }
}

printRectangle(1);
printRectangle(2);
printRectangle(10);