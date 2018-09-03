var acousticArray = JSON.parse(acousticJson);
var electricArray = JSON.parse(electricJson);
var bassArray = JSON.parse(bassJson);
var ukuleleArray = JSON.parse(ukuleleJson);

const soundExtension = '.wav';

var currentMode = 'Standart';
var currentGuitarType = 'Acoustic';
var currentHowlStringSounds;
var currentSoundNameList;

function handleModeChange(modeRadioButton) {
    changeMode(modeRadioButton.value);
    updateSounds();
    updateUI();
}

function handleGuitarTypeChange(guitarTypeRadioButton) {
    changeGuitarType(guitarTypeRadioButton.value);
    updateSounds();
    updateUI();
}

function changeGuitarType(guitarTypeName) {
    currentGuitarType = guitarTypeName;
}

function changeMode(modeName) {
    currentMode = modeName;
}

function updateSounds() {
    var folderPath;
    switch (currentGuitarType) {
        case 'Acoustic':
            folderPath = '/sounds/acoustic_wav/';
            currentSoundNameList = acousticArray[currentMode];
            break;
        case 'Bass':
            folderPath = '/sounds/bass_wav/';
            currentSoundNameList = bassArray[currentMode];
            break;
        case 'Electric':
            folderPath = '/sounds/electric_wav/';
            currentSoundNameList = electricArray[currentMode];
            break;
        case 'Ukulele':
            folderPath = '/sounds/ukulele_wav/';
            currentSoundNameList = ukuleleArray[currentMode];
            break;
    }

    currentHowlStringSounds = [];
    for (i = 0; i < 6; i++) {
        currentHowlStringSounds.push(new Howl({
            src: [folderPath + currentSoundNameList[i] + soundExtension]
        }));
    }
}

function updateUI() {
    var drawNumbers = false;
    for (i = 0; i < 6; i++) {
        var upperStrWithNumbers = currentSoundNameList[i].substring(0, 1).toUpperCase() + currentSoundNameList[i].substring(1, currentSoundNameList[i].length).replace('s', '#');
        if (!drawNumbers) {
            upperStrWithNumbers = upperStrWithNumbers.replace(/[0-9]/g, '');
        }
        guitarButtonList[i].innerHTML = upperStrWithNumbers;
    }
}

function playString(stringNumber) {
    currentHowlStringSounds[stringNumber - 1].play();
}

var guitarButtonList = [];

function assignButton(i) {
    guitarButtonList.push(document.getElementById("string_" + i.toString()));
    guitarButtonList[i - 1].onclick = function () {
        playString(i);
    }
}

for (i = 1; i <= 6; i++) {
    assignButton(i);
}

updateSounds();
updateUI();