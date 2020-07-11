/* Detecting Keyboard press */
document.addEventListener("keydown", function(event) {
    audioToPlay(event.key);
    buttonAnimation(event.key);
});

/* Detecting Button press */
var numberOfDrums = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrums.length; i++) {
    numberOfDrums[i].addEventListener("click", function() {
        audioToPlay(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

/* Responsible to play sound corresponding to keyPressed and buttonClick */
var audio;

function audioToPlay(button_tag) {
    switch (button_tag) {
        case "w": 
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a": 
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case "s": 
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case "d": 
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case "j": 
            audio = new Audio('sounds/snare.mp3');
            break;
        case "k": 
            audio = new Audio('sounds/crash.mp3');
            break;
        case "l": 
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        default :
            alert("Wrong Key Pressed!!");
    }
    audio.play();
}

function buttonAnimation(currentKey) {
    var key = document.querySelector("." + currentKey);
    key.classList.add("pressed");
    setTimeout(function() { key.classList.remove("pressed") }, 100);
}