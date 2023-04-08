let faqQuestAnswers = {
    teamMemberInvite: ["How many team members can I invite?", "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."],
    maxFileUpload: ["What is the maximum file upload size?", "No more than 2GB. All files in your account must fit your allotted storage space."],
    resetPass: ["How do I reset my password?", "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."],
    cancelSub: ["Can I cancel my subscription?", "Yes! Send us a message and we’ll process your request no questions asked."],
    addSupport: ["Do you provide additional support?", "Chat and email support is available 24/7. Phone lines are open during normal business hours."]
};

// import faqQuestAnswers from './QA.json' assert {type:'json'};

// console.log(faqQuestAnswers);

let questCont = document.getElementById('questions-container');

function fillFAQ (qa) {
    Object.keys(qa).forEach(element => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        const answer = document.createElement('div');
        const p = document.createElement('p');
        const hr = document.createElement('hr');

        answer.setAttribute('class', 'answer')

        summary.innerHTML =qa[element][0];
        p.innerHTML = qa[element][1];

        answer.appendChild(p);
        details.appendChild(summary);
        details.appendChild(answer);
        
        questCont.appendChild(details);
        questCont.appendChild(hr);
    });
}

fillFAQ(faqQuestAnswers);

const details = document.querySelectorAll('div#questions-container > details');

function detailClick(event) {
    let clickedElement = event.target;

    if(clickedElement.open) {
        Array.from(details).forEach((child)=>{
            if(clickedElement !== child) {
                child.open = false;
            }
        });
        
        clickedElement.open = true;
    }
}

Array.from(details).forEach((child) => {
    child.addEventListener("toggle", detailClick);
});

const desktopImg = "./images/illustration-woman-online-desktop.svg";
const desktopShad = "./images/bg-pattern-desktop.svg";

const box = document.querySelector("img.box");
const cardImg = document.querySelector("img.card-img");
const shadow = document.querySelector("img.shadow");
const card = document.querySelector("div.card");

function changeImg(x) {
    if(x.matches){
        cardImg.classList.add("hidden");
        shadow.classList.add("hidden");
        box.classList.remove("hidden");
    } else {
        cardImg.classList.remove("hidden");
        shadow.classList.remove("hidden");
        box.classList.add("hidden");
        card
    }
}

const minMedia = window.matchMedia("(min-width: 768px)");
changeImg(minMedia);
minMedia.addEventListener('change', changeImg);