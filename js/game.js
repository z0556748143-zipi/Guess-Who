import { peopleToGuess,personToGuess,questions } from "./data.js";
const selectors = {
    containerr: document.querySelector("#container"),
 //   rand: document.querySelector("#randerImg"),
    timer: document.querySelector("#seconds"),

    modal: document.querySelector("#endGameModal"),
    modalTime: document.querySelector("#modalTimeText"),
    modalImage: document.querySelector("#revealedPersonContainer"),
    questions: document.querySelector("#questions")
};

 const renderPeople = () => {
    for(const personn of peopleToGuess){
// 1. יוצרים "בית" (דיב) לדמות
        const personBox = document.createElement("div");
        personBox.classList.add("person-box");

const imagee=document.createElement("img");
imagee.src=personn.image;
imagee.id=personn.id;
imagee.classList.add("person-img");
personBox.appendChild(imagee);
selectors.containerr.appendChild(personBox);

    }  }
renderPeople();  
/** * @type {number} - מזהה האינטרוול של השעון, משמש לעצירת השעון בסיום המשחק
 */
let timerInterval;

/** @type {number} - כמות השניות שעברו מתחילת המשחק */
let secondsElapsed = 0;

/** @type {number} - זמן המקסימום למשחק (משתנה לפי רמת הקושי) */
let maxSeconds = 10;

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('game'); // זה מחלץ את המספר שמופיע אחרי ה- ?game=
if (level === '2') {
     maxSeconds = 5;
}
/**
 * @description פונקציה שמעדכנת את השעון כל שנייה ומטפלת בסיום המשחק כאשר הזמן מגיע למקסימום
 */
const updateClock = () => {
    secondsElapsed++;
    selectors.timer.textContent = `Time: ${secondsElapsed} seconds`;
if (secondsElapsed == maxSeconds) {
        // 2. הפעלת הלוגיקה של סיום המשחק
        handleGameOver();
}
}
if (level != null){
     timerInterval = setInterval(updateClock, 1000);
}

/**
 * @description פונקציה המטפלת בסיום המשחק - עוצרת את השעון, מציגה מודל ומעבירה לדף שיאים
 * @returns {void}
 */
const handleGameOver = () => {
    // 1. עצירת השעון (שימוש ב-BOM ובתזמון פונקציות) [cite: 25, 27]
    clearInterval(timerInterval);

    // 2. עדכון טקסט הזמן במודל בצורה בטוחה (textContent במקום innerHTML) [cite: 20, 46]
    selectors.modalTime.textContent = `Finished in ${secondsElapsed} seconds!`;

    // 3. ניקוי תוכן קודם מהמכולה לפני הזרקת דמויות חדשות 
    selectors.modalImage.textContent = "";

    // 4. יצירה דינמית של אלמנט התמונה (DOM Manipulation) 
    const revealedImg = document.createElement("img");
    revealedImg.src = personToGuess.image; // שינוי מאפיין src [cite: 21]
    revealedImg.alt = personToGuess.name;
    revealedImg.id = "end-game-photo"; // שינוי מאפיין id [cite: 21]
    
    // 5. יצירת אלמנט כותרת לשם הדמות 
    const nameLabel = document.createElement("h3");
    nameLabel.textContent = `that was: ${personToGuess.name}`;

    // 6. הוספת האלמנטים למודל (הוספת בנים) [cite: 17]
    selectors.modalImage.appendChild(revealedImg);
    selectors.modalImage.appendChild(nameLabel);

    // 7. הצגת המודל על ידי שינוי הסטייל (הפיכה ל-flex)
    selectors.modal.style.display = "flex";

    /**
     * שימוש ב-setTimeout למעבר דף אוטומטי [cite: 27]
     * העברת מידע בין דפים תתבצע בהמשך (למשל שמירה ב-localStorage) [cite: 29]
     */
    setTimeout(() => {
        // שימוש ב-BOM למעבר דף [cite: 25]
        window.location.href = "siim.html";
    }, 4000);
};

/**
 * @function renderQuestions
 * @description Dynamically creates and appends question elements to the DOM with click event listeners.
 * @returns {void}
 */
const renderQuestions = () => {
questions.forEach((q) => {
const questionDiv = document.createElement("div");
questionDiv.id = `q-${q.id}`;
questionDiv.textContent = q.text;
questionDiv.dataset.property = q.property; //זו הדרך להוסיף עוד דברים לאוביקט
questionDiv.classList.add("question-item");
questionDiv.addEventListener("click", () => {
  checkAnswer(q.property, questionDiv);//אני שולחת גם את הדיב שיצרתי כדי לצבוע שאלה שכבר שאלו
});
selectors.questions.appendChild(questionDiv);
});
}
renderQuestions();

/**
 * Description: This function checks if the selected property matches the hidden person's
 *  data and updates the game board by marking non-matching characters.
 * @param {String} property 
 * @param {HTMLElement} questionDiv 
 */
const checkAnswer = (property, questionDiv) => {
  const isCorrect = personToGuess[property];//זה בעצם אומר לי מה יש אצל הדמות
  questionDiv.classList.add("question-asked");
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


