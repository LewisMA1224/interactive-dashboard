// Calculate the user's weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Calculate weekly goal based on 5 workdays
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to weekly goal
    let totalGoal = weeklyGoal + bonusTasks;

    // Create output message
    let output = "User: " + userName + "<br>";
    output += "Total Weekly Goal: " + totalGoal;

    // Display results on the page
    document.getElementById("goal-message").innerHTML = output;
}


// Run when the goal button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Get values from the form
    let userName = document.getElementById("name-input").value;
    let dailyGoal = Number(document.getElementById("taskgoal-input").value);
    let bonusTasks = Number(document.getElementById("weeklybonustasks-input").value);

    // Call the weeklyGoal function
    weeklyGoal(userName, dailyGoal, bonusTasks);
});

