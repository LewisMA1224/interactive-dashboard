// Real-Time Digital Clock and Calendar

// Updates the clock and calendar with the user's current local time and date.
function updateClock() {

    // Create a new Date object containing the current date and time.
    const currentDate = new Date();

    // Get the individual time values.
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Determine whether the current time is AM or PM.
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert from 24-hour time to 12-hour time.
    if (hours > 12) {
        hours = hours - 12;
    }

    // Midnight should display as 12 instead of 0.
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros to single-digit time values.
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Build the formatted time string.
    const timeString =
        hours + ":" + minutes + ":" + seconds + " " + session;

    // Get the current local calendar date.
    const dateString = currentDate.toLocaleDateString();

    // Display the time and date on the webpage.
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Run once immediately when the page loads.
updateClock();

// Run updateClock every 1000 milliseconds (1 second).
setInterval(updateClock, 1000);