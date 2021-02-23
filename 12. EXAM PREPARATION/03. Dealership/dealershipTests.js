const expect = require('chai').expect;
const dealership = require('./dealership');

describe('Dealership Tests', function () {
    describe('newCarCost', function () {

        it('should return newCarPrice if oldCarModel does not exist', function () {
            let carModel = 'BMW X6';
            let expectedPrice = 100_000;

            let actualPrice = dealership.newCarCost(carModel, expectedPrice);

            expect(expectedPrice).to.equal(actualPrice);
        });

        it('should return price with discount for a car that exists', function () {
            let carModel = 'Audi A4 B8';
            let newCarPrice = 100_000;

            let expectedPrice = newCarPrice - 15000;

            let actualPrice = dealership.newCarCost(carModel, newCarPrice);

            expect(expectedPrice).to.equal(actualPrice);
        });
    });

    describe('carEquipment', function () {
        it('should return correct selected extras', function () {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexesArr = [0, 2, 3];

            let expectedArr = [extrasArr[0], extrasArr[2], extrasArr[3]];

            let actualArr = dealership.carEquipment(extrasArr, indexesArr);

            expect(expectedArr).to.deep.equal(actualArr);
        });

        it('should return correct selected extras single pick', function () {
            let extrasArr = ['heated seats'];
            let indexesArr = [0];

            let expectedArr = [extrasArr[0]];

            let actualArr = dealership.carEquipment(extrasArr, indexesArr);

            expect(expectedArr).to.deep.equal(actualArr);
        });
    });

    describe('euroCategory', function () {

        it('should return correct message when category is bigger than 4', function () {
            let category = 5;
            let expectedMessage = `We have added 5% discount to the final price: 14250.`;

            let actualMessage = dealership.euroCategory(category);

            expect(expectedMessage).to.equal(actualMessage);
        });

        it('should return correct message when category is less than 4', function () {
            let category = 3;
            let expectedMessage = 'Your euro category is low, so there is no discount from the final price!';
            let actualMessage = dealership.euroCategory(category);

            expect(expectedMessage).to.equal(actualMessage);
        });

        it('should return correct message when category is equal to 4', function () {
            let category = 4;
            let expectedMessage = `We have added 5% discount to the final price: 14250.`;

            let actualMessage = dealership.euroCategory(category);

            expect(expectedMessage).to.equal(actualMessage);
        });
    });
});
