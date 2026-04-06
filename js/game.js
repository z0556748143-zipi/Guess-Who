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
/** * @type {number} - מזהה האינטרוול של השעון, משמש לעצירת השעון בסיום המשחק
 */
let timerInterval;

/** @type {number} - כמות השניות שעברו מתחילת המשחק */
let secondsElapsed = 0;

/** @type {number} - זמן המקסימום למשחק (משתנה לפי רמת הקושי) */
let maxSeconds = 10;

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('game'); // זה מחלץ את המספר שמופיע אחרי ה- ?game=
if (level === '1') {
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



