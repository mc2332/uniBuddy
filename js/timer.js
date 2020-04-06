function displayBackgroundTimer() {
    const randInt = Math.floor(Math.random() * backgroundCount);
    document.body.style.backgroundImage=`url("../assets/tree${randInt}.jpg")`;
}