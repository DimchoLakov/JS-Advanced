/**
 * 
 * @param {[]} arr 
 */
function solve(arr) {
    arr
        .sort((a, b) => {
            if (a.length === b.length) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            }

            return a.length - b.length;
        })
        .forEach(el => console.log(el));
}

solve(['alpha', 'beta', 'gamma']);