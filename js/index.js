const selectors = {
username: document.querySelector('#username')
};

/**
 * @description מטפל בשליחת טופס ההתחברות: מונע רענון דף ושומר את נתוני המשתמש ב-Session Storage
 * @param {SubmitEvent} event - אובייקט האירוע של שליחת הטופס
 * @returns {void}
 */
document.querySelector('#login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // מונע את שליחת הטופס והטענת הדף מחדש
    const username = selectors.username.value.trim();
    sessionStorage.setItem('username', username); // שומר את שם המשתמש ב-Session Storage
});

/**
 * Handles keydown events on the username field to prevent invalid input.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
selectors.username.addEventListener('keydown',(event) => {
    const allowedChars = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZאבגדהוזחטיכלמםנןסעףפץצקרשת'.split('');
    const functionalKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
 if (!allowedChars.includes(event.key) && !functionalKeys.includes(event.key)){
    event.preventDefault(); 
 }
})


// ************************************************

/**
 * @description open the modal of instructions
 */
document.querySelector('#instructions').addEventListener('click', () => {
    document.querySelector('#instructionsModal').style.display = 'block'; 
});
/**
 * @description close the modal of instructions
 */
document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('#instructionsModal').style.display = 'none';
});

document.querySelector('#game1').addEventListener('click',()=>{
   location.href =`html/mainn.html?game=1`; 
})
document.querySelector('#game2').addEventListener('click',()=>{
   location.href =`html/mainn.html?game=2`; 
})











