function solve(car) {

    let engines = [
        {
            power: 90,
            volume: 1800
        },
        {
            power: 120,
            volume: 2400
        },
        {
            power: 200,
            volume: 3500
        }
    ];

    for (const engine of engines) {
        if (engine.power === car.power) {
            car.engine = engine;
            delete car.power;
            break;
        }
    }

    if (!car.hasOwnProperty('engine')) {
        let goal = car.power;
        let closest = [90, 120, 200].reduce(function (prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        car.engine = engines.find(e => e.power === closest);
        delete car.power;
    }

    let carriages = [
        {
            type: 'hatchback',
            color: ''
        },
        {
            type: 'coupe',
            color: ''
        }
    ];

    for (const carriage of carriages) {
        if (carriage.type === car.carriage) {
            car.carriage = carriage;
            car.carriage.color = car.color;
            delete car.color;
            break;
        }
    }

    let wheelsize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;
    let wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(wheelsize);
    }

    delete car.wheelsize;
    car.wheels = wheels;

    console.log(car);

    return car;
}


solve({
    model: 'VW Golf II',
    power: 150,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});