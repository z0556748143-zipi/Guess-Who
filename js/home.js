const selectors = {
 homeBtn:document.querySelector('#homebutton'),
 headd:document.querySelector('h2'),
 instructionsbtn:document.querySelector('#instructions'),
 modal: document.querySelector('#instructionsModal'),
    closeBtn: document.querySelector('#closeModal')
};

/**
 * @description מעביר את המשתמש לדף הבית הראשי של האתר
 * @returns {void}
 */
selectors.homeBtn.addEventListener('click',()=>{
    window.location.href = '../index.html';
})
selectors.headd.innerHTML=`Hi ${sessionStorage.getItem('username')}, Welcome to Guess Who!`

/**
 * @description פותח את מודל ההוראות
 */
selectors.instructionsbtn.addEventListener('click', () => {
    selectors.modal.style.display = 'block'; 
});
/**
 * @description סוגר את מודל ההוראות
 */
selectors.closeBtn.addEventListener('click', () => {
    selectors.modal.style.display = 'none';
});
