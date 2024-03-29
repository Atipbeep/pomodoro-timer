// vars

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 45;
let breakTime = 10;

let seconds = "00"

let end_audio = new Audio('audio/za-warudo-time-stop.mp3')
let end_break_audio = new Audio('audio/gta-san-andreas-ah-shit-here-we-go-again.mp3')

// display
window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;

    workTitle.classList.add('active');
}

// start timer
function start() {
    // change button
    document.getElementById("start").style.display = 'none';
    document.getElementById("reset").style.display = 'block';


    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;
    
    // countdown
    let timerFunction = () => {
        // change the display
        document.getElementById("minutes").innerHTML = workMinutes;
        document.getElementById("seconds").innerHTML = seconds;

        // start the time
        seconds = seconds -1;

        if(seconds == 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes == -1) {
                if(breakCount % 2 == 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++
                    end_audio.play();
                    
                    // change the painel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                } else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++
                    end_break_audio.play();
                     // change the painel
                     breakTitle.classList.remove('active');
                     workTitle.classList.add('active');
                    }
            }
            seconds = 59
        } 
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s

}