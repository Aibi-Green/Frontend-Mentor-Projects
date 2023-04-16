const imgContainer = document.querySelector(".web-image");;
const desktopImg = "./images/hero-desktop.jpg";
const mobileImg = "./images/hero-mobile.jpg";
const media = window.matchMedia("(min-width: 950px)");
const inputField = document.querySelector("input[name='email']");
const errorIcon = document.querySelector(".icon-error")
const spanError = document.querySelector("span.error");
const sendBtn = document.querySelector("form button");

function changeImg(x) {
    if(x.matches){
        imgContainer.src = desktopImg;
    } else {
        imgContainer.src = mobileImg;
    }
}

function emailVerify() {
    if(inputField.validity.typeMismatch){
        spanError.src = errorMsg;
    } else {
        spanError.src = "";
    }
}

changeImg(media);
media.addEventListener("change", changeImg);

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputField.value);
    console.log(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputField.value));
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputField.value)) {
        errorIcon.classList.remove("visible");
        spanError.classList.remove("visible");
        inputField.classList.remove("red-border");
        return true;
    } else {
        errorIcon.classList.add("visible");
        spanError.classList.add("visible");
        inputField.classList.add("red-border");
        setTimeout(() => {
            errorIcon.classList.remove("visible");
            spanError.classList.remove("visible");
            inputField.classList.remove("red-border");
        }, 3000)
        return false;
    }
})