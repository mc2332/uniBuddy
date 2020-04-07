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
       /* const mins = document.getElementById(minsID);
        if (minsID.innerText!=0) {
            minusMins(minsID, hoursID);
        }*/
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