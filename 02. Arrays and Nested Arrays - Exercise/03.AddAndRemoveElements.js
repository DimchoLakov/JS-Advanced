/**
 * 
 * @param {[]} commandsArr 
 */
function solve(commandsArr) {
    let resultArr = [];
    let numberToAdd = 1;

    commandsArr.forEach(element => {
        if (element === 'add') {
            resultArr.push(numberToAdd)
        } else if (element === 'remove') {
            resultArr.pop();
        }
        numberToAdd++;
    });

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        resultArr.forEach(element => console.log(element));
    }
}

solve(['add', 'add', 'add', 'add']);

solve(['add', 'add', 'remove', 'add', 'add']);

solve(['remove', 'remove', 'remove']);