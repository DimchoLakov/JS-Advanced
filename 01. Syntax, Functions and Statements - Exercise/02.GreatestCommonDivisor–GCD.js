function getGcd(a, b) {
    if (!b) {
        return a;
    }

    return getGcd(b, a % b);
}

console.log(getGcd(15, 5));