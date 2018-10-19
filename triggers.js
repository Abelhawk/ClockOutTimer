window.onload = initialize(); startTime();

function initialize() {
    console.log("Testing");
    let todaysDate = new Date;
    let today = dayOfTheWeek(todaysDate.getDay());
    let todayDiv = document.getElementById('dayOfTheWeek');
    if (today !== 'Saturday' && today !== 'Sunday'){
        todayDiv.innerText = 'Happy ' + today + '!'

    } else {
        todayDiv.innerText = 'Working weekends, eh? :/'
    }
}

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm;
    if (h >= 13){
        ampm = 'p.m.';
        h -= 12;
    } else {
        ampm = 'a.m.'
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s + ' ' + ampm;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
}

function validatePassKey(tb) {
    console.log("Woo");
    if (tb.value.length >= 2){
        document.activeElement.blur();
        document.getElementById('minutes').focus();
    }
}

function clearField(input){
    input.value = '';
}

function dayOfTheWeek(day) {
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}