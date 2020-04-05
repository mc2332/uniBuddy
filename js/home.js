const happyPhrases = [
    "Please try harder",
    "Everyone is relying on you",
    "This is the most important time of your life"
];

function pickRandom(array) {
    const arrayLength = array.length;
    const randInt = Math.floor(Math.random() * arrayLength);
    return array[randInt];
};

function displayHappyPhrase(happyMessageId) {
    const happyMessage = document.getElementById(happyMessageId);
    console.log('happyMessage :', happyMessage);
    happyMessage.innerText=pickRandom(happyPhrases);
}

function init(happyMessageId) {
    displayHappyPhrase(happyMessageId);
}