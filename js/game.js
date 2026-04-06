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

let secondsElapsed = 0;
const maxSeconds = 35; // אפשר לשנות לפי רמת קושי

const updateClock = () => {
    secondsElapsed++;
    selectors.timer.textContent = `Time: ${secondsElapsed} seconds`;
if (secondsElapsed == maxSeconds) {
 
}
}



