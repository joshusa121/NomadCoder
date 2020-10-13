const form = document.querySelector(".js-form"),
    input = documnet.querySelector("input");
    greeting = document.querySelector(".js-greetings")


const USER_LS = "currentUser", 
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}



function handleSubmit(event){
    event.preventDefault();
}


    
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit")
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
} 




function loadName () {
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}



function init() {
    
}

init()

//localstorage.setItem("nico", true)
