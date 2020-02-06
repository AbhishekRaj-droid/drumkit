// Adding addEventListener to button in div class
var i;
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttoninnerhtml = this.innerHTML;

        makesound1(buttoninnerhtml);
        buttonAnimation(buttoninnerhtml);
    });
}


//detecting keypress

document.addEventListener("keydown", function(event) {
    makesound1(event.key);
})

function makesound1(key) {
    switch (key) {
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
        break;

        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
        break;

        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
        break;

        case "j":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
        break;

        case "k":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
        break;

        case "l":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
        break;
    }
}

function buttonAnimation(currkey) {
    var activebutton = document.querySelector("." + currkey);
    activebutton.classList.add("pressed");

    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 100);
}
