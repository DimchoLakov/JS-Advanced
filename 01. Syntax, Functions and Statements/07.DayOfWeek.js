function getDayOfWeek(dayAsString) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = daysOfWeek.indexOf(dayAsString);
    if (index < 0) {
        console.log('error');
    } else {
        console.log(index + 1);
    }
}

getDayOfWeek('Monday');
getDayOfWeek('Friday');
getDayOfWeek('Invalid');