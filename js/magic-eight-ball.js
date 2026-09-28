// Put your JavaScript code in this file
// Possible Magic Eight Ball responses
const answers = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Definitely",
    "Very doubtful"
];

// Display a random Magic Eight Ball answer
function displayAnswer() {

    const randomIndex = Math.floor(Math.random() * answers.length);

    const circle = document.getElementById("circle");

    circle.innerHTML = answers[randomIndex];
    circle.style.display = "block";
}


// Check for a question when the ball is clicked
document.getElementById("ball").addEventListener("mousedown", function() {

    const question = document.getElementById("question").value;

    if (question == "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }

});


// Hide the answer when reset is clicked
document.getElementById("reset").addEventListener("click", function() {

    document.getElementById("circle").style.display = "none";

});
