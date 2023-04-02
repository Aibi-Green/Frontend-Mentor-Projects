const mobileImg = './images/image-header-mobile.jpg';
const desktopImg = './images/image-header-desktop.jpg';

const imgDiv = document.querySelector('.card-img-div img');

function myFunction(x) {
    if(x.matches) {
        imgDiv.src = desktopImg;
        // console.log("true");
    } else {
        imgDiv.src = mobileImg;
        // console.log("false");
    }
}

const minMedia = window.matchMedia("(min-width: 1195px)");
myFunction(minMedia);
minMedia.addEventListener('change', myFunction);