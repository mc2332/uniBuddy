const happyPhrases = [
    "Please try harder",
    "Everyone is relying on you",
    "This is the most important time of your life",
    "Do a flip"
];

const backgroundCount = 4;

function pickRandom(array) {
    const arrayLength = array.length;
    const randInt = Math.floor(Math.random() * arrayLength);
    return array[randInt];
}

function displayBackground() {
    const randInt = Math.floor(Math.random() * backgroundCount);
    document.body.style.backgroundImage=`url("./assets/tree${randInt}.jpg")`;
}

function displayHappyPhrase(happyMessageId) {
    const happyMessage = document.getElementById(happyMessageId);
    console.log('happyMessage :', happyMessage);
    happyMessage.innerText=pickRandom(happyPhrases);
}

function getCountdown(examStart) {
    const now = moment();
    const fromNow = moment.duration(examStart.diff(now));

    const daysLeft = Math.floor(fromNow.asDays());

    const hoursLeft = Math.floor(fromNow.subtract(daysLeft, "Days").asHours());
    
    const minutesLeft = Math.floor(fromNow.subtract(hoursLeft, "Hours").asMinutes());

    const secondsLeft = Math.floor(fromNow.subtract(minutesLeft, "Minutes").asSeconds());
    
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");
    
    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    mins.innerText = minutesLeft;
    secs.innerText = secondsLeft;
}

function init(happyMessageId, moment) {
    displayHappyPhrase(happyMessageId);
    displayBackground();
    const examStart = moment("20200511", "YYYYMMDD");
    getCountdown(examStart);
}

