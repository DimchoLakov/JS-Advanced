class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length + 1 > this.capacity) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(v => v.carNumber === carNumber);
        if (car === null ||
            car === undefined) {
            throw new Error('The car, you\'re looking for, is not found.');
        }

        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let indexOfCar = this.vehicles.indexOf(car);
        this.vehicles.splice(indexOfCar, 1);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let car = this.vehicles.find(v => v.carNumber === carNumber);
        if (car === null ||
            car === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        let resultArr = [];
        if (carNumber === undefined) {
            let emptySlots = this.capacity - this.vehicles.length;
            resultArr.push(`The Parking Lot has ${emptySlots} empty spots left.`);

            let allVehicles = this.vehicles.slice();
            allVehicles.sort((a, b) => {
                return a.carModel - b.carModel
            });

            for (const vehicle of allVehicles) {
                let payedStatus = vehicle.payed ? 'Has payed' : 'Not payed';
                resultArr.push(`${vehicle.carModel} == ${vehicle.carNumber} - ${payedStatus}`);
            }
        } else {
            let car = this.vehicles.find(v => v.carNumber === carNumber);
            let payedStatus = car.payed ? 'Has payed' : 'Not payed';
            resultArr.push(`${car.carModel} == ${car.carNumber} - ${payedStatus}`);
        }

        return resultArr.join('\n');
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));