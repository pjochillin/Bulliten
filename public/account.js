const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login_submit = document.querySelector("#login-submit");
const sign_up_submit = document.querySelector("#sign-up-submit");
const login_email = document.querySelector("#login-email");
const login_password = document.querySelector("#login-password");
const sign_up_email = document.querySelector("#sign-up-email");
const sign_up_username = document.querySelector("#sign-up-username");
const sign_up_password = document.querySelector("#sign-up-password");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

login_submit.addEventListener("click", () => {
    const email = login_email.value;
    const password = login_password.value;
    console.log(email);
    console.log(password);
});

sign_up_submit.addEventListener("click", () => {
    const username = sign_up_username.value;
    const email = sign_up_email.value;
    const password = sign_up_password.value;
    console.log(username);
    console.log(email);
    console.log(password);
});
