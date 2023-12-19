function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
}

// console.log(refs.bodyEl);
// console.log(refs.spanEl);
// console.log(refs.btnEl);

refs.btnEl.addEventListener('click', handleBtnElClick);

function handleBtnElClick(event) {
  const changeColor = getRandomHexColor();
  refs.spanEl.textContent = changeColor;
  refs.bodyEl.style.backgroundColor =changeColor; 
  // console.log(changeColor);

}