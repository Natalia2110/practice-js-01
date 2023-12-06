
const spanEl = document.getElementById('name-output');
const inputEl = document.getElementById('name-input');
console.log(spanEl);

// const inputEvent = () => {
//     spanEl.textContent = inputEl.currentTarget.value;
// }
const onInputEvent = (event) => {
    spanEl.textContent = event.currentTarget.value;
  };

inputEl.addEventListener("input", onInputEvent);

// (event) => {
//     spanEl.textContent = event.currentTarget.value;
//   });