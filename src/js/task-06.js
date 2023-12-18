const inputEl = document.getElementById('validation-input');
console.log(inputEl);



// const onInputBlur = (event) => {

// };

function onInputBlur (event) {
    const inputElDataLength = Number(inputEl.getAttribute("data-length"));
    console.log(inputElDataLength);

    const inputElOnEvent = event.currentTarget.value.trim().length;
    console.log(inputElOnEvent);

    const onBorderStyle = inputElDataLength === inputElOnEvent? inputEl.classList.toggle("valid"): inputEl.classList.toggle("invalid");
    return onBorderStyle;
    // const onBorderStyle = inputElDataLength === inputElOnEvent? inputEl.classList.add("valid"): inputEl.classList.add("invalid");

    // return onBorderStyle;
    // if(inputElDataLength === inputElOnEvent) {
    //    return inputEl.classList.toggle("valid");
    // } else {
    //    return inputEl.classList.toggle("invalid");
    // }
    
    
    // if(event.currentTarget.length >)
}

inputEl.addEventListener("blur", onInputBlur);