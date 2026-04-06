import { peopleToGuess,personToGuess } from "./data.js";

const selectors = {
    containerr: document.querySelector("#container"),
    rand: document.querySelector("#randerImg"),
    timer: document.querySelector("#seconds"),

    modal: document.querySelector("#endGameModal"),
    modalTime: document.querySelector("#modalTimeText"),
    modalImage: document.querySelector("#revealedPersonContainer")
};


const imagee=document.createElement("img");
imagee.src=personToGuess.image;
imagee.id=personToGuess.id;
selectors.rand.appendChild(imagee);


 const renderPeople = () => {
    for(const personn of peopleToGuess){
const imagee=document.createElement("img");
imagee.src=personn.image;
selectors.containerr.appendChild(imagee);
imagee.id=personn.id;
    }  }
renderPeople();  
let timerInterval;
let secondsElapsed = 0;
let maxSeconds = 35; // אפשר לשנות לפי רמת קושי

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('game'); // זה מחלץ את המספר שמופיע אחרי ה- ?game=
if (level === '1') {
     maxSeconds = 15;
}
if (level != null){
     timerInterval = setInterval(updateClock, 1000);
}

const updateClock = () => {
    secondsElapsed++;
    selectors.timer.textContent = `Time: ${secondsElapsed} seconds`;
if (secondsElapsed == maxSeconds) {
 
}
}



