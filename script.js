// Content Right Element
let contentRight = document.getElementById("content-right");


// Education Button Click
let educationBtn = document.getElementById("parkour-btn");

educationBtn.addEventListener("click", test);

// function displayEducation() {
//     // Clear the html first
//     contentRight.innerHTML = "";

//     // Pull the code from HoldingCode page
//     let content = document.getElementById("education-code").innerHTML;

//     // Replace the content
//     contentRight.innerHTML = content;
// }

async function test() {
    let res = await fetch("Parkour.html");
    let html = await res.text();

    document.getElementById("content-right").innerHTML = html;
    console.log(html)
}