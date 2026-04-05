const selectors = {
 homeBtn:document.querySelector('#homebutton')
};

/**
 * @description מעביר את המשתמש לדף הבית הראשי של האתר
 * @returns {void}
 */
selectors.homeBtn.addEventListener('click',()=>{
    window.location.href = '../index.html';
})
