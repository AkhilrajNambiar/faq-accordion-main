window.onload = () => {
    let firstAnswer = document.querySelector("p.answer");
    let firstToggleIcon = document.querySelector("img.toggle-icon");
    console.log(firstAnswer.style);
    if (firstAnswer.style.display == "") {
        firstAnswer.style.display = "block";
        firstToggleIcon.setAttribute("src", "/assets/images/icon-minus.svg");
    }
};

let toggleIcons = [...document.querySelectorAll("img.toggle-icon")];
let answers = [...document.querySelectorAll("p.answer")];
toggleIcons.forEach((icon) => {
    let index = toggleIcons.indexOf(icon);
    icon.addEventListener("click", () => {
        if (icon.getAttribute("src") == "/assets/images/icon-minus.svg") {
            answers.forEach((answer) => {
                answer.style.display = "";
            });
            toggleIcons.forEach(icon => {
                icon.setAttribute("src", "/assets/images/icon-plus.svg");
            });
        } else {
            answers.forEach((answer) => {
                answer.style.display = "";
            });
            toggleIcons.forEach(icon => {
                icon.setAttribute("src", "/assets/images/icon-plus.svg");
            });
            answers[index].style.display = "block";
            icon.setAttribute("src", "/assets/images/icon-minus.svg");
        }
    });
});