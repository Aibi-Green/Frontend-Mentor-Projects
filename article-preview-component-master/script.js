const shareBtn = document.querySelector('.circle');
const profile = document.querySelector('.profile');

const changeContent = () => {
    const profileDiv = document.querySelector('.profile > div:nth-child(1)');
    const links = document.querySelector('.links');
    const shareIcon = document.querySelector('.circle svg path');

    if(profile.dataset.toggle === "true") {
        profileDiv.style.display = "none";
        links.classList.remove("hidden");
        shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
        shareIcon.setAttribute("fill", "white");
    } else {
        profileDiv.style.display = "flex";
        links.classList.add("hidden");
        shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
        shareIcon.setAttribute("fill", "hsl(217, 19%, 35%)");
    }
}

const changeBg = () => {
    if(profile.dataset.toggle === "true"){
        profile.style.backgroundColor = 'hsl(217, 19%, 35%)';
    } else {
        profile.style.backgroundColor = 'white';
    }
    changeContent();
}

const toggleLinks = () => {
    profile.dataset.toggle = profile.dataset.toggle === "true" ? "false" : "true";
    changeBg();
}



shareBtn.addEventListener("click", e => {
    toggleLinks();
});