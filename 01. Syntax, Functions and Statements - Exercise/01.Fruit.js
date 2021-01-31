function printMoneyNeededForFruit(typeOfFruit, weightInGrams, pricePerKilo) {
    let weightInKilos = weightInGrams / 1000;
    let totalPrice = weightInKilos * pricePerKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${typeOfFruit}.`);
}

printMoneyNeededForFruit('orange', 2500, 1.80);
printMoneyNeededForFruit('apple', 1563, 2.35);