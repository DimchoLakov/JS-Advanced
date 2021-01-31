/**
 * 
 * @param {[]} arr 
 */
function getCalories(arr) {
    let calories = {};

    for (let i = 0; i < arr.length - 1; i += 2) {
        let foodName = arr[i];
        let grams = Number(arr[i + 1]);

        if (!calories.hasOwnProperty(foodName)) {
            calories[foodName] = grams;
        } else {
            calories[foodName] += grams;
        }
    }

    console.log(calories);
}

getCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);