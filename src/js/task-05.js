const refs = {
    spanEl: document.getElementById('name-output'),
    inputEl: document.getElementById('name-input'),
};

// const spanEl = document.getElementById('name-output');
// const inputEl = document.getElementById('name-input');
// console.log(spanEl);

// const inputEvent = () => {
//     spanEl.textContent = inputEl.currentTarget.value;
// }
const onInputEvent = (event) => {
    refs.spanEl.textContent = event.currentTarget.value.trim();
  };

  refs.inputEl.addEventListener("input", onInputEvent);

// (event) => {
//     spanEl.textContent = event.currentTarget.value;
//   });