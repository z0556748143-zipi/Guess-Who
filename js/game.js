import { peopleToGuess,personToGuess,questions } from "./data.js";


 const renderPeople = () => {
    const containerr = document.querySelector("#container")
    for(const personn of peopleToGuess){
// 1. יוצרים "בית" (דיב) לדמות
        const personBox = document.createElement("div");
        personBox.classList.add("person-box");
personBox.id = personn.id;

const imagee=document.createElement("img");
imagee.src=personn.image;
imagee.id=personn.id;
imagee.classList.add("person-img");
personBox.appendChild(imagee);
containerr.appendChild(personBox);

personBox.addEventListener("click",(e)=>{
// אם כבר יש עליה איקס, אי אפשר לבחור בה
    if (personBox.classList.contains("eliminated")) return;
    const isWin = personn.id === personToGuess.id && countMistakes > 0; //  יהיה נצחון למשחק אם גם זמן טוב וגם כמה טעויות לא נגמרה
    handleGameOver(isWin);
})

    }  }
 
/** * @type {number} - מזהה האינטרוול של השעון, משמש לעצירת השעון בסיום המשחק
 */
let timerInterval;
/**  כמות השניות שעברו למי ששחק מתחילת המשחק */
let secondsElapsed = 0;
let countMistakes = 5; // מספר הטעויות המותרות לפני הפסד אוטומטי 
/**   זמן המקסימום למשחק (משתנה לפי רמת הקושי) */
let maxSeconds = 30;
/**
 * @description different values for each level of the game, based on URL parameter.
 */
const differentBetweenLevels = () => {
const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('game'); // זה מחלץ את המספר שמופיע אחרי ה- ?game=
if (level === '2') {
      maxSeconds = 5;
    countMistakes = 2;
     }
     return level;
}


/**
 * @description פונקציה שמעדכנת את השעון כל שנייה ומטפלת בסיום המשחק כאשר הזמן מגיע למקסימום
 */
const updateClock = () => {
    const timer = document.querySelector("#seconds");
const timerContainer = document.querySelector("#timer-container");
    secondsElapsed++;
    timer.textContent = secondsElapsed;
if (secondsElapsed > maxSeconds * 0.8) {
        // הוספת מחלקה שמשנה את ה-CSS (צבע ואנימציה)
        timerContainer.classList.add("danger-zone");
    }

if (secondsElapsed == maxSeconds ) {
        // 2. הפעלת הלוגיקה של סיום המשחק
        clearInterval(timerInterval); // עצירת השעון
        handleGameOver();
                }
}


/**
 * @description פונקציה המטפלת בסיום המשחק - עוצרת את השעון, מציגה מודל ומעבירה לדף שיאים
 * @returns {void}
 */
const handleGameOver = (isWin=null) => {
    const modal = document.querySelector("#endGameModal");
const modalTime = document.querySelector("#modalTimeText");
const modalImage = document.querySelector("#revealedPersonContainer");

    const winSound = new Audio('../audio/win.mp3');
const loseSound = new Audio('../audio/lose.mp3');
    // 1. עצירת השעון (שימוש ב-BOM ובתזמון פונקציות) [cite: 25, 27]
    clearInterval(timerInterval);
const clueeButton = document.querySelector("#clueButton");
    if (clueButton) {
        clueButton.style.display = "none";
    }

    const playerName = sessionStorage.getItem('username') || "Player";
    const modalTitle = document.querySelector("#modalTitle");
    if (isWin === true) {
        winSound.play();
        modalTitle.textContent = `🏆 ${playerName}, YOU WIN! 🏆`;
    } else if (isWin === false) {
        loseSound.play();
        modalTitle.textContent = `❌ ${playerName}, WRONG GUESS! ❌ OR TOO MANY MISTAKES 😐`;  
    }
    else {
        modalTitle.textContent = `⏰ ${playerName}, TIME IS UP! ⏰`}  
    
    modalTime.textContent = `Finished in ${secondsElapsed} seconds! and with ${countMistakes} mistakes left!`;

    // 3. ניקוי תוכן קודם מהמכולה לפני הזרקת דמויות חדשות 
    modalImage.textContent = "";

    // 4. יצירה דינמית של אלמנט התמונה (DOM Manipulation) 
    const revealedImg = document.createElement("img");
    revealedImg.src = personToGuess.image; // שינוי מאפיין src [cite: 21]
    revealedImg.alt = personToGuess.name;
    revealedImg.id = "end-game-photo"; // שינוי מאפיין id [cite: 21]
    
    // 5. יצירת אלמנט כותרת לשם הדמות 
    const nameLabel = document.createElement("h3");
    nameLabel.textContent = `that was: ${personToGuess.name}`;

    // 6. הוספת האלמנטים למודל (הוספת בנים) [cite: 17]
    modalImage.appendChild(revealedImg);
    modalImage.appendChild(nameLabel);

    // 7. הצגת המודל על ידי שינוי הסטייל (הפיכה ל-flex)
    modal.style.display = "flex";

    /**
     * שימוש ב-setTimeout למעבר דף אוטומטי [cite: 27]
     * העברת מידע בין דפים תתבצע בהמשך (למשל שמירה ב-localStorage) [cite: 29]
     */
    setTimeout(() => {
        // שימוש ב-BOM למעבר דף [cite: 25]
        const name = sessionStorage.getItem('username');
        window.location.href = `highScores.html?name=${name}&time=${secondsElapsed}&win=${isWin}`;
}, 4000);
};

/**
 * @function renderQuestions
 * @description Dynamically creates and appends question elements to the DOM with click event listeners.
 * @returns {void}
 */
const renderQuestions = () => {
    const questionsContainer = document.querySelector("#questions");
questions.forEach((q) => {
const questionDiv = document.createElement("div");
questionDiv.id = `q-${q.id}`;
questionDiv.dataset.property = q.property; //זו הדרך להוסיף עוד דברים לאוביקט

questionDiv.addEventListener("click", () => {
  checkAnswer(q.property, questionDiv);//אני שולחת גם את הדיב שיצרתי כדי לצבוע שאלה שכבר שאלו
});

if (q.type === "color") {
    questionDiv.classList.add("color-circle-item");
questionDiv.style.backgroundColor = q.colorCode;   //אין לי אופציה לעשות את העיצוב ב CSS כי כל עיגול צבע שונה לפי הערך שלו כביכול
document.getElementById("hair-colors-container").appendChild(questionDiv);
}
else {
questionDiv.textContent = q.text;
questionDiv.classList.add("question-item");
questionsContainer.appendChild(questionDiv);
}
});
}


/**
 * Description: This function checks if the selected property matches the hidden person's
 *  data and updates the game board by marking non-matching characters.
 * @param {String} property 
 * @param {HTMLElement} questionDiv 
 */
const checkAnswer = (property, questionDiv) => {
  const isCorrect = personToGuess[property];//זה בעצם אומר לי מה יש אצל הדמות
  questionDiv.classList.add("question-asked");
// 1. אוספים את כל הדיבים של הדמויות מהמסך
const allBoxes = document.querySelectorAll(".person-box");
let countCorrect = 0,countNot = 0;

allBoxes.forEach((box) => {
// פה לוקחים את הדיבים שאין עליהם איקס
    const isStillInGame = !box.classList.contains("eliminated");
    if (isStillInGame) {
       //מוצאים את הדמות ע"י ID
        const personData = peopleToGuess.find(p => p.id == box.id);
if (personData && personData[property] === true) {
 countCorrect++;
            }
        else {
            countNot++;
        }
    }
});

if (countCorrect ===0 || countNot === 0) {
    countMistakes--; //אם אין אף אחד עם התכונה הזאת או שכולם איתה אז טפשי לשאול את השאלה
}
if (countMistakes === 0) {
    handleGameOver(false);
    return;
}
const allImages = document.querySelectorAll(".person-img");
allImages.forEach((img) => {
  treatOneCharacter(img, property, isCorrect);
});

}


/**
 * Description: Marks a single character with an X if it doesn't match the correct attribute.
 * @param {HTMLImageElement} img 
 * @param {String} property 
 * @param {Boolean} isCorrect 
 */
const treatOneCharacter=(img, property, isCorrect) => {
const characterData = peopleToGuess.find(p => p.id == img.id);
// בדיקה 3 (החדשה!): האם כבר שמנו עליה איקס? (בודקים אם לאבא שלה כבר יש ילד עם קלאס x-overlay)
  const alreadyEliminated = img.parentElement.querySelector(".x-overlay");
if (characterData && characterData[property] !== isCorrect && !alreadyEliminated) {
 
    const xImg = document.createElement("img");
    xImg.src = "../img/image (10).png";
    xImg.classList.add("x-overlay");

    img.parentElement.classList.add("eliminated");

    img.parentElement.appendChild(xImg); //זה ישים את האיקס הזה בתוך הדיב הגדול כלומר ילך לאבא שלו    
}
}

const clueBtn = document.querySelector("#clueButton");
clueBtn.addEventListener("mouseenter", () => {
    clueBtn.style.backgroundColor = "#ff2dc3"; 
});
clueBtn.addEventListener("mouseleave", () => { 
    clueBtn.style.backgroundColor = ""; 
});
clueBtn.addEventListener("click", () => {
    console.log("Button clicked!");
    let countMatch = 0, countNot = 0, best=peopleToGuess.length+1, bestQuestion=null;
const allBoxes = document.querySelectorAll(".person-box");

for(const q of questions){  

const thisOne=document.querySelector(`#q-${q.id}`);//תחפש את הדמות על המסך שלי
if (!thisOne || thisOne.classList.contains("question-asked")) continue;//שאלתי כבר את השאלה הזו
countMatch = 0, countNot = 0;
for(const p of peopleToGuess){
    const box = document.getElementById(p.id);

    const isStillInGame = !box.classList.contains("eliminated");//אין לו עדין איקס
            if (isStillInGame) {
        if(p[q.property]===true)
            countMatch++;
        else 
            countNot++;
         }
}
if (Math.abs(countMatch-countNot) < best){
    best = Math.abs(countMatch-countNot);
    bestQuestion = q;
}
countNot = 0, countMatch = 0;
}
if (bestQuestion) {
        const modal = document.querySelector("#hint-modal");
        const textSpan = document.querySelector("#hint-text");
        // 1. כותבים את הטקסט
       // textSpan.textContent = `Best question to ask: ${bestQuestion.text}`;

       const displayHint = bestQuestion.text ? bestQuestion.text : `Is the hair color ${bestQuestion.property}?`;
textSpan.textContent = `Best question to ask: ${displayHint}`;
        // 2. מראים את המודל (מוסיפים את הקלאס מה-CSS)
        modal.classList.add("show-hint");
        // 3. מעלימים אחרי 3 שניות
        setTimeout(() => {
            modal.classList.remove("show-hint");
        }, 2000);
                }

});


const managerOfTheGame = () => {
const levell= differentBetweenLevels();
renderPeople(); 
renderQuestions();
if (levell != null){
     timerInterval = setInterval(updateClock, 1000);
}
}

managerOfTheGame();
