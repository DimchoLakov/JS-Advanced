/**
 *
 * @param {string} city
 * @param {Number} population
 * @param {Number} treasury
 */
function solve(city, population, treasury) {
    return {
        name: city,
        population: population,
        treasury: treasury
    };
}

console.log(solve('Tortuga', 7000, 15000));
console.log(solve('Santo Domingo', 12000, 23500));