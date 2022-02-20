const loginForm = document.querySelector(".modal-form");
const loginInput = document.querySelector(".modal-form input");
const greeting = document.querySelector(".greeting");
const loginModal = document.querySelector(".login-modal");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usernamec";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginModal.classList.add(HIDDEN_CLASSNAME);
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username) {
    greeting.innerText =`Hello! ${username}, What's new?`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    loginModal.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}
