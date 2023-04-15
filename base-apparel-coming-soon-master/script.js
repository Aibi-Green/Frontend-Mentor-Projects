const imgContainer = document.querySelector(".web-image");;
const desktopImg = "./images/hero-desktop.jpg";
const mobileImg = "./images/hero-mobile.jpg";
const media = window.matchMedia("(min-width: 950px)");
const errorMsg = "Please provide a valid email";
const inputField = document.querySelector("input[name='email']");
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

sendBtn.addEventListener("click", emailVerify)