const expect = require('chai').expect;
const pizzUni = require('./pizzUni');

describe('Pizza Place Tests', function () {

    describe('makeAnOrder', function () {
        it('should throw an error when orderedPizza is set to false', () => {
            expect(() => pizzUni.makeAnOrder({
                orderedPizza: ''
            })).to.throw(Error);
        });

        it('should return correct result after ordering pizza', () => {
            let actualResult = pizzUni.makeAnOrder({
                orderedPizza: 'Pepperoni',
                orderedDrink: 'Fanta'
            });
            let expectedResult = 'You just ordered Pepperoni and Fanta.';

            expect(expectedResult).to.equal(actualResult);
        });
    });

    describe('getRemainingWork', function () {
        it('should return correct message when remaining array is empty', function () {
            let expectedMessage = 'All orders are complete!';
            let actualMessage = pizzUni.getRemainingWork([]);

            expect(expectedMessage).to.equal(actualMessage);
        });

        it('should return correct message when there are remaining pizzas', function () {
            let pepperoniPizza = 'Pepperoni Pizza';
            let status = 'Not Ready';

            let expectedMessage = `The following pizzas are still preparing: ${pepperoniPizza}.`;
            let actualMessage = pizzUni.getRemainingWork([{
                pizzaName: pepperoniPizza,
                status: status
            }]);

            expect(expectedMessage).to.equal(actualMessage);
        });

    });

    describe('orderType', function () {

        it('should', function () {
            let totalSum = 200;
            let orderType = 'Delivery';

            let actualTotalSum = pizzUni.orderType(totalSum, orderType);
            let expectedTotalSum = totalSum;

            expect(expectedTotalSum).to.equal(actualTotalSum);
        });

    });

});