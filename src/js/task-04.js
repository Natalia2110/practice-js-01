
let counterValue = 0;

const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.getElementById('value');


// console.log(btnDecrementEl);
// console.log(btnIncrementEl);
// console.log(spanEl);
const handleButtonDecrementClick = () => {
    counterValue -=  1;
    spanEl.textContent = counterValue;
    
    // console.log(btnDecrementEl);
    // console.log(counterValue);
    
};
const handleButtonIncrementClick = () => {
    counterValue +=  1;
    spanEl.textContent = counterValue;
    // console.log(btnIncrementEl);
    // console.log(counterValue);
}

btnDecrementEl.addEventListener("click", handleButtonDecrementClick);
btnIncrementEl.addEventListener("click", handleButtonIncrementClick);