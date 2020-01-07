var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var showCurrentTime = function () {

    var clock = document.getElementById('clock')
    console.log(clock)
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    let meridian = "AM"
    if (hours >= 12)
        meridian = "PM"
    if (hours > 12)
        hours = hours - 12

    if (minutes < 10)
        minutes = "0" + minutes
    if (seconds < 10)
        seconds = "0" + seconds

    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';
    clock.innerText = clockTime
}

var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    var timeEventJs = document.getElementById('timeEvent')
    var lolcatImageJs = document.getElementById('lolcatImage')

    if (time == partytime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText)
    timeEventJs.innerText = messageText
    lolcatImageJs.src = image

    showCurrentTime()

};
updateClock();

var oneSecond = 1000
setInterval(updateClock, oneSecond)

// party time button
var partyButton = document.querySelector('#partytimebutton')
console.log(partyButton);

var partyEvent = function () {

    if (partytime < 0) {
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!"
        partyButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener('click', partyEvent)
partyEvent()

// Activate wakeup selector
var wakeupTimeSelector = document.getElementById('wakeUpTimeSelector')
var wakeupEvent = function () {
    wakeuptime = wakeupTimeSelector.value
}
wakeupTimeSelector.addEventListener('change', wakeupEvent)

// Activate lunch selector
var lunchSelector = document.getElementById('lunchTimeSelector')
var LunchEvent = function () {
    lunchtime = lunchSelector.value
}
lunchSelector.addEventListener('change', LunchEvent)

// Activate Nap-Time selector
var napTimeSelector = document.getElementById('napTimeSelector')
var napEvent = function () {
    naptime = napTimeSelector.value
}
napTimeSelector.addEventListener('change', napEvent)