let totalWorkTimeHours = 0;
let totalWorkTimeMins = 0;
let totalWorkTimeSecs = 0;

let totalBreakTimeHours = 0;
let totalBreakTimeMins = 0;
let totalBreakTimeSecs = 0;

let currentHours;
let currentMinutes;
let currentSeconds;

let startHour;
let startMin;

function displayBackgroundTimer() {
    const randInt = Math.floor(Math.random() * backgroundCount);
    document.body.style.backgroundImage=`url("../assets/tree${randInt}.jpg")`;
}

function addHours(hoursID) {
    const hours = document.getElementById(hoursID);
    if (hours.innerText==12) {
        hours.innerText = 0;
    } else {
        hours.innerText = parseInt(hours.innerText) + 1;
    }
}

function minusHours(hoursID) {
    const hours = document.getElementById(hoursID);
    if (hours.innerText==0) {
        hours.innerText = 12;
    } else {
        hours.innerText = parseInt(hours.innerText) - 1;
    }
}

function addMins(minsID, hoursID) {
    const mins = document.getElementById(minsID);
    if (mins.innerText==59) {
        mins.innerText = 0;
        addHours(hoursID);
    } else {
        mins.innerText = parseInt(mins.innerText) + 1;
    }

}

function minusMins(minsID) {
    const mins = document.getElementById(minsID);
    if (mins.innerText==0) {
        mins.innerText = 59;
    } else {
        mins.innerText = parseInt(mins.innerText) - 1;
    }
}

function addSecs(secsID, minsID, hoursID) {
    const secs = document.getElementById(secsID);
    if (secs.innerText==59) {
        secs.innerText = 0;
        addMins(minsID, hoursID);
    } else {
        secs.innerText = parseInt(secs.innerText) + 1;
    }
}

function minusSecs(secsID) {
    const secs = document.getElementById(secsID);
    if (secs.innerText==0) {
        secs.innerText = 59;
    } else {
        secs.innerText = parseInt(secs.innerText) - 1;
    }
}

function decreaseHoursTimer() {
    console.log("decrease hours");
    const hours = document.getElementById("hours");
    hours.innerText = hours.innerText - 1;
}

function decreaseMinsTimer() {
    console.log("decrease mins")
    const mins = document.getElementById("mins");
    if (mins.innerText === "0") {
        mins.innerText = "59"
        decreaseHoursTimer();
    } else {
        mins.innerText = mins.innerText - 1;
    }
}

function decreaseTime(type) {
    const secs = document.getElementById("secs"); 
    const mins = document.getElementById("mins");
    const hours = document.getElementById("hours");
    const startTime = moment().format('LT');
    const sessionsSoFar = parseInt(document.getElementById("revisionSessions").innerText.substr(10,1));
    console.log(sessionsSoFar);
    if (sessionsSoFar == 0 && type=="revision") {
        updateStartTime(startTime,sessionsSoFar);
    }
    currentHours = hours.innerText;
    currentMinutes = mins.innerText;
    currentSeconds = secs.innerText;
    
    if (secs.innerText === "0" && mins.innerText === "0" && hours.innerText === "0") {
        console.log('all 0');
    } else {
        var repeat = setInterval(decreaseSecsTimer, 1000);

        function decreaseSecsTimer() {
            console.log("decrease secs");
            const secs = document.getElementById("secs");
            if (secs.innerText === "0" && mins.innerText === "0" && hours.innerText === "0") {
                console.log("Done!")
                clearInterval(repeat);
                addToTotals(type,sessionsSoFar);
            } else {
                if (secs.innerText === "0") {
                    secs.innerText = "59"
                    decreaseMinsTimer();
                } else {
                    secs.innerText = secs.innerText - 1;
                }
            }
        }
    }
}

function addToTotals(type,sessionsSoFar) {
    if (type==="revision") {
        totalWorkTimeHours = totalWorkTimeHours + parseInt(currentHours);
        totalWorkTimeMins = totalWorkTimeMins + parseInt(currentMinutes);
        totalWorkTimeSecs = totalWorkTimeSecs + parseInt(currentSeconds);
        document.getElementById("revisionValue").innerText = `${totalWorkTimeHours}h:${totalWorkTimeMins}m:${totalWorkTimeSecs}s`;
        document.getElementById("revisionSessions").innerText = `Sessions: ${sessionsSoFar+1}`;
    } else {
        totalBreakTimeHours = totalBreakTimeHours + parseInt(currentHours);
        totalBreakTimeMins = totalBreakTimeMins + parseInt(currentMinutes);
        totalBreakTimeSecs = totalBreakTimeSecs + parseInt(currentSeconds);
        document.getElementById("breakValue").innerText = `${totalBreakTimeHours}h:${totalBreakTimeMins}m:${totalBreakTimeSecs}s`;
        const breakSessionsSoFar = parseInt(document.getElementById("revisionSessions").innerText.substr(10,1));
        document.getElementById("breakSessions").innerText = `Sessions: ${breakSessionsSoFar+1}`;
    }
}

function updateStartTime(startTime) {
    document.getElementById("startValue").innerText = startTime;
}