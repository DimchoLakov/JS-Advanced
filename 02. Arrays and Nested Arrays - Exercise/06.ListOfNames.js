/**
 * 
 * @param {[]} arr 
 */
function solve(arr) {
    arr
        .sort((a, b) => a.localeCompare(b))
        .map((element, index) => {
            console.log(`${index + 1}.${element}`)
        });
}

solve(["John", "Bob", "Christina", "Ema"]);