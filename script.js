
const maleNames = [
    "Kwasi",    // Sunday
    "Kwadwo",   // Monday
    "Kwabena",  // Tuesday
    "Kwaku",    // Wednesday
    "Yaw",      // Thursday
    "Kofi",     // Friday
    "Kwame"     // Saturday
];

const femaleNames = [
    "Akosua",   // Sunday
    "Adwoa",    // Monday
    "Abenaa",   // Tuesday
    "Akua",     // Wednesday
    "Yaa",      // Thursday
    "Afua",     // Friday
    "Ama"       // Saturday
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

document.querySelector("button").addEventListener("click", function () {

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const gender = document.querySelector('input[name="gender"]:checked');

    if (!day || day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (!month || month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }

    if (!year) {
        alert("Please enter a valid year.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }


    const birthDate = new Date(year, month - 1, day);
    const dayIndex = birthDate.getDay();

    let akanName;

    if (gender.value === "male") {
        akanName = maleNames[dayIndex];
    } else {
        akanName = femaleNames[dayIndex];
    }

    document.getElementById("result").innerHTML = `
        <h2>Result</h2>
        <p>You were born on <strong>${days[dayIndex]}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
});