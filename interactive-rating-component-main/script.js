const button = document.querySelector(".submit");
const rates = document.querySelectorAll(".rate");
const ratePage = document.querySelector(".feedback-container");
const thankPage = document.querySelector(".thank-you-container");

let submittedRate = 0;

const rateClick = (event) => {
    const rate = event.target;
    submittedRate = rate.textContent;
    // add and remove style to fix hover state issues
    rate.classList.add("selected");
    rateDefault(event);
};

// sets siblings to default color
const rateDefault = (event) => {
    const parentContainer = event.target.parentElement;
    Array.from(parentContainer.children).forEach((child) => {
        if (child.textContent !== submittedRate) {
            child.classList.remove("selected");
        }
    });
};

// switches layout
const submitRate = (event) => {
    if(submittedRate === 0){
        alert("Please select a rate before submitting");
    } else {
        ratePage.classList.add("hidden");
        thankPage.classList.remove("hidden");
        document.querySelector(".final-rate").textContent = submittedRate;
    }
};

// applies rateClick function to each child element
Array.from(rates).forEach((grade) => {
    grade.addEventListener("click", rateClick);
});

// adds a function to submit button
button.addEventListener("click", submitRate);