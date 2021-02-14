function attachGradientEvents() {
    let resultDiv = document.querySelector('#result');

    let gradientDiv = document.querySelector('#gradient');
    gradientDiv.addEventListener('mousemove', function (event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultDiv.textContent = power + '%';
    });

    gradientDiv.addEventListener('mouseout', function (event) {
        resultDiv.textContent = '';
    });
}