function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  firstBoxEl: document.getElementById('controls').firstElementChild,
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  secondBoxEl: document.getElementById('boxes'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', onDestroyBoxes);

function createBoxes() {
  const amount = refs.firstBoxEl.value;

  let murkup = "";
  for(let i = 0; i < amount; i += 1) {
    
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    murkup += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
  }
  return refs.secondBoxEl.insertAdjacentHTML('afterbegin', murkup);
};

function onDestroyBoxes() {
  refs.secondBoxEl.innerHTML = "";
}


