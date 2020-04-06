const backgroundCount = 4;

function displayBackground() {
    const randInt = Math.floor(Math.random() * backgroundCount);
    document.body.style.backgroundImage=`url("../assets/tree${randInt}.jpg")`;
}