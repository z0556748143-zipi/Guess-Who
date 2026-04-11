const selectors = {
    questionsContainer: document.querySelector("#highscores-container")
};
const initHighScores = () => {
    //  חילוץ הנתונים מהכתובת
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const time = urlParams.get('time');
    const isWinOrLose = urlParams.get('win');
     let allScores = JSON.parse(localStorage.getItem('highScores')) || []; //הוא ממיר את המחרוזת לאובייקטים  
 if (name && time && isWinOrLose === 'true') {
allScores.push({name:name,time:parseInt(time)});//משתמשים בהמרה למס כי מה שמקבלים זה מחרוזת ועליה לא ניתן לעשות פעולות
allScores.sort((a, b) => a.time - b.time);//פה אני עושה את המיון
allScores = allScores.slice(0, 10);//פה אני לוקחת מהרשימה את ה10 הטובים כי הם הכי נמוכים

localStorage.setItem('highScores', JSON.stringify(allScores)); //הוא ממיר את האובייקטים למחרוזת 
// בונוס מקצועי: ניקוי הכתובת כדי שבריענון דף לא יתווסף אותו שיא שוב
 window.history.replaceState({}, document.title, window.location.pathname);//הוא בעצם יחזור לקישור המקורי בלי מה ששלחו איתו

}
divdOfSi(allScores);
}

const divdOfSi=(scores)=>{
 selectors.questionsContainer.textContent="";
 if (scores.length === 0) {
        selectors.questionsContainer.textContent = "No scores yet. Be the first!";
        return;
    }
 scores.map((score,index)=>{
const card = document.createElement("div");
card.classList.add("person-box");
card.textContent = `#${index + 1} | ${score.name} - ${score.time}s`;
selectors.questionsContainer.appendChild(card);
 })
}

initHighScores();