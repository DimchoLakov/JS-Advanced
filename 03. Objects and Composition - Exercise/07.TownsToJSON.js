function solve(arr) {
    arr = arr.slice(1);

    let result = [];
    for (const str of arr) {
        let [town, latitude, longitude] = str
            .split('|')
            .filter(x => x !== '');

        result.push({
            'Town': town.trim(),
            'Latitude': Number(Number(latitude).toFixed(2)),
            'Longitude': Number(Number(longitude).toFixed(2))
        });
    }

    console.log(JSON.stringify(result));
};



solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);