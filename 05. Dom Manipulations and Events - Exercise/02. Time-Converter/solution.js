function attachEventsListeners() {

    let daysBtn = document.querySelector('#daysBtn');
    daysBtn.addEventListener('click', function () {
        let dateInputFields = getDateInputFields();
        let seconds = dateInputFields.days * 24 * 60 * 60;
        let timeResult = convertTime(seconds);

        fillInputFields(timeResult);
    });

    let hoursBtn = document.querySelector('#hoursBtn');
    hoursBtn.addEventListener('click', function () {
        let dateInputFields = getDateInputFields();
        let seconds = dateInputFields.hours * 60 * 60;
        let timeResult = convertTime(seconds);

        fillInputFields(timeResult);
    });

    let minutesBtn = document.querySelector('#minutesBtn');
    minutesBtn.addEventListener('click', function () {
        let dateInputFields = getDateInputFields();
        let seconds = dateInputFields.minutes * 60;
        let timeResult = convertTime(seconds);

        fillInputFields(timeResult);
    });

    let secondsBtn = document.querySelector('#secondsBtn');
    secondsBtn.addEventListener('click', function () {
        let dateInputFields = getDateInputFields();
        let seconds = dateInputFields.seconds;
        let timeResult = convertTime(seconds);

        fillInputFields(timeResult);
    });

    function getDateInputFields() {
        let days = Number(document.querySelector('#days').value);
        let hours = Number(document.querySelector('#hours').value);
        let minutes = Number(document.querySelector('#minutes').value);
        let seconds = Number(document.querySelector('#seconds').value);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    function convertTime(timeInSeconds) {
        return {
            days: timeInSeconds / 60 / 60 / 24,
            hours: timeInSeconds / 60 / 60,
            minutes: timeInSeconds / 60,
            seconds: timeInSeconds
        }
    }

    function fillInputFields(timeResult) {
        document.querySelector('#days').value = timeResult.days;
        document.querySelector('#hours').value = timeResult.hours;
        document.querySelector('#minutes').value = timeResult.minutes;
        document.querySelector('#seconds').value = timeResult.seconds;
    }
}