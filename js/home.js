const selectors = {
 homeBtn:document.querySelector('#homebutton'),
 headd:document.querySelector('h2'),
 instructionsbtn:document.querySelector('#instructions'),
 modal: document.querySelector('#instructionsModal'),
closeBtn: document.querySelector('#closeModal'),
 game1Btn: document.querySelector('#game1'),
game2Btn: document.querySelector('#game2')
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

selectors.game1Btn.addEventListener('click',()=>{
   location.href =`../game.html?game=1`; 
})
selectors.game2Btn.addEventListener('click',()=>{
   location.href =`../game.html?game=2`; 
})