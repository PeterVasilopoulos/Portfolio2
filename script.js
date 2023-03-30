// Content Right Element
let contentRight = document.getElementById("content-right");


// Education Button Click
let educationBtn = document.getElementById("education-btn");

educationBtn.addEventListener("click", displayEducation);

function displayEducation() {
    // Clear the html first
    contentRight.innerHTML = "";

    // Pull the code from HoldingCode page
    let content = document.getElementById("education-code").innerHTML;

    // Replace the content
    contentRight.innerHTML = content;
}