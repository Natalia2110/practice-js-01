const refs = {
    inputEl: document.getElementById('font-size-control'),
    spanEl: document.getElementById('text'),
};

// console.log(refs.inputEl);
// console.log(refs.spanEl);
refs.spanEl.style.fontSize = refs.inputEl.value + 'px';

refs.inputEl.addEventListener("input", onInputChange);


function onInputChange (event) {
    // console.log(event.currentTarget.value);

    refs.spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
    // console.log(refs.spanEl.style.fontSize);
}

