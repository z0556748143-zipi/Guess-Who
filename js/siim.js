const initHighScores = () => {
    // 1. חילוץ הנתונים מהכתובת (BOM - Location)
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
 if (name) {
  let allScores = JSON.parse(localStorage.getItem('highScores')) || []; //הוא ממיר את המחרוזת לאובייקטים  
 }

}

