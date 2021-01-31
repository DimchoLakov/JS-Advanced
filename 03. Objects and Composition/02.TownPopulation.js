/**
 * 
 * @param {[]} arr 
 */
function solve(arr) {
    let townPopulation = {};

    arr.forEach(element => {
        let tokens = element.split("<->").filter(el => el !== '');
        let city = tokens[0];
        let population = Number(tokens[1]);

        if (!townPopulation.hasOwnProperty(city)) {
            townPopulation[city] = population;
        } else {
            townPopulation[city] += population;
        }
    });

    let townPopulationKeys = Object.keys(townPopulation);
    for (let townPopulationKey of townPopulationKeys) {
        console.log(`${townPopulationKey}: ${townPopulation[townPopulationKey]}`);
    }
}

solve(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]);