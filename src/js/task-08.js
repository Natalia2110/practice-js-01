const formEl = document.querySelector('.login-form');
// console.log(formEl);

// const childrenFormEl = formEl.children;
// console.log(childrenFormEl);

// const formLastElChild  = formEl.lastElementChild;
// console.log(formLastElChild);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    // console.log(email);
    const password = event.currentTarget.elements.password.value;
    // console.log(password);

    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
        const submitForm = {};
        submitForm.email = email;
        submitForm.password = password;
        console.log(submitForm);
        // console.log(`Login: ${login.value}, Password: ${password.value}`);
        formEl.reset();
    
};