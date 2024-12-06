let alarmTime = null; // Store the alarm time
const alarmSound = document.getElementById("alarm-sound"); // Reference to the beep sound

// Function to update the clock
function updateClock() {
  const now = new Date();

  // Extract hours, minutes, and seconds
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  // Update the time on the screen
  document.getElementById("time").textContent = currentTime;

  // Check if the alarm time matches the current time
  if (alarmTime === `${hours}:${minutes}`) {
    alarmSound.play(); // Play the beep sound
    alarmTime = null; // Reset alarm after it rings
  }
}

// Function to set the alarm
document.getElementById("set-alarm").addEventListener("click", () => {
  const alarmInput = document.getElementById("alarm-time").value;

  if (alarmInput) {
    alarmTime = alarmInput; // Store the alarm time (in hh:mm format)
    alert(`Alarm set for ${alarmTime}`);
  } else {
    alert("Please select a valid time for the alarm.");
  }
});

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
