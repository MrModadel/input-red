let itemInputs = document.querySelectorAll('.input__item');
let btn = document.querySelector('.form__btn');
function inputCheck(inps, btn) {
   btn.onclick = () => {
      inps.forEach(inp => {
         let key = inp.querySelector('input');
         let text = inp.querySelector('.input__item-sup-title');
         let title = inp.querySelector('.input__item-title');
         let psevdo = inp.querySelector('.psevdo');
         if (key.value.trim() === '') {
            key.style.border = '2px solid red';
            text.innerHTML = 'Please enter your email adress';
            text.classList.add('red');
            title.classList.add('red');
            psevdo.style.display = 'block';
         }
      });
   }
   inps.forEach(inp => {
      inp.onkeyup = () => {
         let key = inp.querySelector('input');
         let text = inp.querySelector('.input__item-sup-title');
         let title = inp.querySelector('.input__item-title');
         let psevdo = inp.querySelector('.psevdo');
         if (key.value.trim() === '') {
            key.style.border = '2px solid red';
            text.innerHTML = 'Please enter your email adress';
            text.classList.add('red');
            title.classList.add('red');
            psevdo.style.display = 'block';
         } else {
            key.style.border = '2px solid #543fd3';
            text.innerHTML = 'Need to fill';
            text.classList.remove('red');
            title.classList.remove('red');
            psevdo.style.display = 'none';
         }
      }
   });
}
inputCheck(itemInputs, btn)