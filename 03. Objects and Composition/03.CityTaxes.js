/**
 *
 * @param {string} cityName
 * @param {Number} population
 * @param {Number} treasury
 */
function cityTaxes(cityName, population, treasury) {
    return {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percetange) {
            this.population += Math.floor(this.population * percetange / 100);
        },
        applyRecession(percetange) {
            this.treasury -= Math.floor(this.treasury * percetange / 100);
        }
    };
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(8);
console.log(city.treasury);