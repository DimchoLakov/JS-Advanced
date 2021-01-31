function solve(inputArr) {
    let heroes = getHeroesData(inputArr);

    return JSON.stringify(heroes);

    function getHeroesData(arr) {
        let heroes = [];
        for (const heroString of arr) {
            let tokens = heroString.split(' / ')
                                   .filter(x => x !== '');
            let name = tokens[0];
            let level = Number(tokens[1]);

            let items = [];
            if (tokens.length > 2) {
                items = tokens[2].split(', ')
                                 .filter(x => x !== '')
            }
            let hero = {
                name,
                level,
                items
            }

            heroes.push(hero);
        }
        return heroes;
    };
};

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);