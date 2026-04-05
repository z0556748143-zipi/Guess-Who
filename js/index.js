const selectors = {
form: document.querySelector('#login-form'),
username: document.querySelector('#username'),
tz: document.querySelector('#tz')
};

/**
 * @description מטפל בשליחת טופס ההתחברות: מונע רענון דף ושומר את נתוני המשתמש ב-Session Storage
 * @param {SubmitEvent} event - אובייקט האירוע של שליחת הטופס
 * @returns {void}
 */
selectors.form.addEventListener('submit', function(event) {
    event.preventDefault(); // מונע את שליחת הטופס והטענת הדף מחדש
    const username = selectors.username.value.trim();
    const tz = selectors.tz.value.trim();
    sessionStorage.setItem('username', username); // שומר את שם המשתמש ב-Session Storage
    sessionStorage.setItem('tz', tz); // שומר את תעודת הזהות ב-Session Storage
});

