let todaysDate = new Date();

window.onload = initialize();
startTime();

function initialize() {
    console.log("Testing");
    let todaysDate = new Date;
    let today = dayOfTheWeek(todaysDate.getDay());
    let todayDiv = document.getElementById('dayOfTheWeek');
    if (today !== 'Saturday' && today !== 'Sunday') {
        todayDiv.innerText = 'Happy ' + today + '!'
    } else {
        todayDiv.innerText = 'Working weekends, eh? :/'
    }
}

function startTime() {
    todaysDate = new Date();
    let h = todaysDate.getHours();
    let m = todaysDate.getMinutes();
    let s = todaysDate.getSeconds();
    let ampm;
    if (h >= 12) {
        ampm = 'p.m.';
        if (h !== 12) h -= 12;
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
    if (i < 10) {
        i = "0" + i
    } // add zero in front of numbers < 10
    return i;
}

function validatePassKey(tb) {
    if (tb.value.length >= 2) {
        document.activeElement.blur();
        document.getElementById('minutes').focus();
    }
}

function clearField(input) {
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

function calcHours() {
    todaysDate = new Date();
    let hoursLeft = 40;
    let ampm;
    let div = document.getElementById('output');
    let currentTime = document.getElementById('timeClockedIn').value;
    let hoursLogged = parseInt(document.getElementById('hours').value);
    let minutesLogged = parseInt(document.getElementById('minutes').value);
    if (hoursLogged >= 40) hoursLeft = 80;
    let hourMins = hoursLeft * 60;
    let currentHourMins = parseInt(currentTime.substr(0, 2)) * 60 + parseInt(currentTime.substr(3, 2));
    let loggedHourMins = hoursLogged * 60 + minutesLogged;
    let result = hourMins - loggedHourMins;
    let x = (result + currentHourMins) / 60;
    let xMinutes = Math.round((x % 1) * 60);
    let xHours = x - (x % 1);
    if (xHours >= 12) ampm = 'PM';
    else ampm = 'AM';
    let clockOutTime = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate(), xHours, xMinutes, 0);
    if (xMinutes < 10) xMinutes = '0' + xMinutes;
    if (xHours > 12) xHours -= 12;
    if (Math.sign(todaysDate - clockOutTime) === -1) {
        if (xHours <= 12) {
            div.style.backgroundColor = '#b9cfe5';
            div.innerHTML = `<h3>You should clock out today at:</h3><p class="timeDisplay">
            ${xHours}:${xMinutes} ${ampm}</p>`;
        } else {
            div.innerHTML = `<h3>There's no way you can finish all your hours today. Check back tomorrow.</h3>`
        }
    } else {
        div.style.backgroundColor = 'lightcoral';
        div.innerHTML = `<h2>Good heavens, you're over on time! Clock out <span class="italic">now,</span> you maniac! Go! <span class="italic">GO!!</span></h2>`
    }
}

function gottaBeZero(input) {
    if (input.value === '') input.value = '0';
}

function rando(n) {
    return Math.floor(Math.random() * n + 1)
}