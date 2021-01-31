/**
 * 
 * @param {[]} piesArray 
 * @param {string} firstTargetPie 
 * @param {string} secondTargetPie 
 */
function solve(piesArray, firstTargetPie, secondTargetPie) {
    let startIndex = piesArray.indexOf(firstTargetPie);
    let endIndex = piesArray.indexOf(secondTargetPie);

    let filteredArray = piesArray.slice(startIndex, endIndex + 1);
    return filteredArray;
}

console.log(
    solve(
        ['Pumpkin Pie',
            'Key Lime Pie',
            'Cherry Pie',
            'Lemon Meringue Pie',
            'Sugar Cream Pie'],
        'Key Lime Pie',
        'Lemon Meringue Pie'
    ));

console.log(
    solve(
        ['Apple Crisp',
            'Mississippi Mud Pie',
            'Pot Pie',
            'Steak and Cheese Pie',
            'Butter Chicken Pie',
            'Smoked Fish Pie'],
        'Pot Pie',
        'Smoked Fish Pie'
    ));
