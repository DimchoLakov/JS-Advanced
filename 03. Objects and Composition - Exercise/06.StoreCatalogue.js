function solve(arr) {

    let storage = {};

    for (const str of arr) {
        let [productName, price] = str
            .split(' : ')
            .filter(x => x !== '');

        let firstProductLetter = productName[0].toUpperCase();
        if (!storage.hasOwnProperty(firstProductLetter)) {
            storage[firstProductLetter] = [];
        }
        storage[firstProductLetter].push({
            productName,
            price
        });
    }

    Object.keys(storage)
        .sort()
        .forEach(function (element, index) {
            console.log(element);
            storage[element]
                .sort(function (a, b) {
                    return a.productName.toUpperCase().localeCompare(b.productName.toUpperCase());
                });
            for (const product of storage[element]) {
                console.log(`  ${product.productName}: ${product.price}`);
            }
        });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);