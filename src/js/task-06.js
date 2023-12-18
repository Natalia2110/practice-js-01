const inputEl = document.getElementById('validation-input');
// console.log(inputEl);



// const onInputBlur = (event) => {

// };

function onInputBlur (event) {
    const inputElDataLength = Number(inputEl.getAttribute("data-length"));
    // console.log(inputElDataLength);

    const inputElOnEvent = event.currentTarget.value.trim().length;
    // console.log(inputElOnEvent);

  

    if(inputElDataLength === inputElOnEvent) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')

    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add("invalid");
    }
    
}

inputEl.addEventListener("blur", onInputBlur);