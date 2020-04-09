const happyPhrases = [
    "Please try harder",
    "Everyone is relying on you",
    "This is the most important time of your life",
    "Keep working! You're nearly there",
    "One more session gets you closer to the finish line",
    "Smile to relieve stress! :)",
    "There is no substitute for hard work",
    "Try meditation!",
    "If you're struggling, take a break",
    "You will be extremely powerful when this is all over",
    "Get rich or die trying",
    "If something is important enough, even if the odds are against you, you should still do it",
    "Every day you wake up is a good day",
    "Failure is an option here. If things are not failing, you are not innovating enough",
    "The first step is to establish that something is possible; then probability will occur"
];

const backgroundCount = 10;

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

function decreaseDays() {
    console.log("decrease days");
    const days = document.getElementById("days");
    if (days.innerText === "0") {
    } else {
        days.innerText = days.innerText - 1;
    }
}

function decreaseHours() {
    console.log("decrease hours");
    const hours = document.getElementById("hours");
    if (hours.innerText === "0") {
        hours.innerText = "23"
        decreaseDays();
    } else {
        hours.innerText = hours.innerText - 1;
    }
}

function decreaseMins() {
    console.log("decrease mins")
    const mins = document.getElementById("mins");
    if (mins.innerText === "0") {
        mins.innerText = "59"
        decreaseHours();
    } else {
        mins.innerText = mins.innerText - 1;
    }
}

function decreaseSecs() {
    console.log("decrease secs");
    const secs = document.getElementById("secs");
    const mins = document.getElementById("mins");
    const hours = document.getElementById("hours");
    const days = document.getElementById("days");
    if (secs.innerText === "0" && mins.innerText === "0" && hours.innerText === "0" && days.innerText === "0") {
    } else {
        if (secs.innerText === "0") {
            secs.innerText = "59"
            decreaseMins();
        } else {
            secs.innerText = secs.innerText - 1;
        }
    }
}

function countdown() {
    setInterval(decreaseSecs, 1000);
}

function init(happyMessageId, moment) {
    displayHappyPhrase(happyMessageId);
    displayBackground();
    const examStart = moment("20200511", "YYYYMMDD");
    getCountdown(examStart);
    countdown();
}