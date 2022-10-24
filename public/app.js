// email input validation
const form = document.getElementById("email-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailInputValue = document.getElementById("email-input").value;

    if(emailInputValue.match(validRegex)){
        e.currentTarget.submit();
    }
    else{
        // show error message
        document.getElementById("error-message").classList.remove("hidden");
    }
});